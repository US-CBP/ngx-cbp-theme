// Source https://github.com/filipesilva/angular-quickstart-lib/blob/master/build.js
// modified to suit our purpose
'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const camelCase = require('camelcase');
const ngc = require('@angular/compiler-cli/src/main').main;
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const del = require('del');

const inlineResources = require('./inline-resources');

const defaultLibFolder = path.join(__dirname);

module.exports.build = function(options) {
    options = options || {};
    let rootFolder = path.join(options.rootFolder) || defaultLibFolder;

    const pkg = require(path.join(rootFolder, 'package.json'));

    options = Object.assign({}, {
        rootFolder : rootFolder,
        libName : pkg.name,
        externalDependencies : _getDependencies(pkg),
        compilationFolder : path.join(rootFolder, 'out-tsc'),
        srcFolder: path.join(rootFolder, 'src' ,'lib'),
        distFolder : path.join(rootFolder, 'dist-lib'),
    }, options);

    options = Object.assign({
        tempLibFolder : path.join(options.compilationFolder, 'lib'),
        es5OutputFolder : path.join(options.compilationFolder, 'lib-es5'),
        es2015OutputFolder : path.join(options.compilationFolder, 'lib-es2015')
    }, options);

    del.sync(options.distFolder);
    del.sync(options.compilationFolder);

    return Promise.resolve()
    // Copy library to temporary folder and inline html/css.
        .then(() => _relativeCopy(`**/*`, options.srcFolder, options.tempLibFolder)
            .then(() => inlineResources(options.tempLibFolder))
            .then(() => console.log('Inlining succeeded.'))
        )
        // Compile to ES2015.
        .then(() => ngc({ project: `${options.tempLibFolder}/tsconfig.lib.json` })
            .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
            .then(() => console.log('ES2015 compilation succeeded.'))
        )
        // Compile to ES5.
        .then(() => ngc({ project: `${options.tempLibFolder}/tsconfig.es5.json` })
            .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
            .then(() => console.log('ES5 compilation succeeded.'))
        )
        // Copy typings and metadata to `dist/` folder.
        .then(() => Promise.resolve()
            .then(() => _relativeCopy('**/*.d.ts', options.es2015OutputFolder, options.distFolder))
            .then(() => _relativeCopy('**/*.metadata.json', options.es2015OutputFolder, options.distFolder))
            .then(() => console.log('Typings and metadata copy succeeded.'))
        )
        // Bundle lib.
        .then(() => {
            // Base configuration.
            const es5Entry = path.join(options.es5OutputFolder, `${options.libName}.js`);
            const es2015Entry = path.join(options.es2015OutputFolder, `${options.libName}.js`);
            const rollupBaseConfig = {
                name: camelCase(options.libName),
                output: {sourcemap: true},
                // ATTENTION:
                // Add any dependency or peer dependency your library to `globals` and `external`.
                // This is required for UMD bundle users.
                globals: {
                    // The key here is library name, and the value is the the name of the global variable name
                    // the window object.
                    // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals for more.
                    '@angular/core': 'ng.core'
                },
                // external: [
                //     // List of dependencies
                //     // See https://github.com/rollup/rollup/wiki/JavaScript-API#external for more.
                //     '@angular/core'
                // ],
                external: options.externalDependencies,
                plugins: [
                    // commonjs({
                    //     include: ['node_modules/rxjs/**']
                    // }),
                    sourcemaps(),
                    nodeResolve({ jsnext: true, module: true })
                ]
            };

            // UMD bundle.
            const umdConfig = Object.assign({}, rollupBaseConfig, {
                input: es5Entry,
                output: {
                    file: path.join(options.distFolder, `bundles`, `${options.libName}.umd.js`),
                    name: `${options.libName}`,
                    format: 'umd'
                },
            });

            // Minified UMD bundle.
            const minifiedUmdConfig = Object.assign({}, rollupBaseConfig, {
                input: es5Entry,
                output: {
                    file: path.join(options.distFolder, `bundles`, `${options.libName}.umd.min.js`),
                    name: `${options.libName}`,
                    format: 'umd'
                },

                plugins: rollupBaseConfig.plugins.concat([uglify({})])
            });

            // ESM+ES5 flat module bundle.
            const fesm5config = Object.assign({}, rollupBaseConfig, {
                input: es5Entry,
                output: {
                    file: path.join(options.distFolder, `${options.libName}.es5.js`),
                    format: 'es'
                }
            });

            // ESM+ES2015 flat module bundle.
            const fesm2015config = Object.assign({}, rollupBaseConfig, {
                input: es2015Entry,
                output: {
                    file: path.join(options.distFolder, `${options.libName}.js`),
                    format: 'es'
                },

            });

            const allBundles = [
                umdConfig,
                minifiedUmdConfig,
                fesm5config,
                fesm2015config
            ].map(cfg => rollup.rollup(cfg).then(bundle => bundle.write(cfg.output)));

            return Promise.all(allBundles)
                .then(() => console.log('All bundles generated successfully.'))
        })
        // Copy package files
        .then(() => Promise.resolve()
            .then(() => _relativeCopy('LICENSE*', options.rootFolder, options.distFolder))
            .then(() => _relativeCopy('package.json', options.rootFolder, options.distFolder))
            .then(() => _relativeCopy('README*', options.rootFolder, options.distFolder))
            .then(() => _relativeCopy('**/*.scss', options.srcFolder, options.distFolder))
            .then(() => console.log('Package files copy succeeded.'))
            .catch(() => console.error('Copying failed!'))
        )
        .catch(e => {
            console.error('\Build failed. See below for errors.\n');
            console.error(e);
            process.exit(1);
        });
};


const OTHER_EXTERNALS_NOT_DIRECTLY_IN_PACKAGE = ['@angular/platform-browser/animations'];

function _getDependencies(pkg) {
    let deps = [];
    if (pkg.dependencies) {
        let devDeps = Object.keys(pkg.dependencies);
        devDeps.forEach((dep) => {
            deps.push(dep);
        });
    }
    if (pkg.peerDependencies) {
        let peerDeps = Object.keys(pkg.peerDependencies);
        peerDeps.forEach((dep) => {
            if (!deps.includes(dep)) {
                deps.push(dep);
            }
        });
    }
    if (pkg.devDependencies) {
        let devDeps = Object.keys(pkg.devDependencies);
        devDeps.forEach((dep) => {
            if (!deps.includes(dep)) {
                deps.push(dep);
            }
        });
    }

    // YG : Note
    // In general @angular/platform-browser/animations should be only imported by App module however that adds additional configuration to remember to include
    // hence while we import it in Library project we have to treat this as external
    Array.prototype.push.apply(deps, OTHER_EXTERNALS_NOT_DIRECTLY_IN_PACKAGE);
    console.log('Treating external dependencies:\n\t'+JSON.stringify(deps));
    return deps;
}


// Copy files maintaining relative paths.
function _relativeCopy(fileGlob, from, to) {
    console.log('copying '+fileGlob+' from '+from+' to '+to);
    return new Promise((resolve, reject) => {
        glob(fileGlob, { cwd: from, nodir: true }, (err, files) => {
            if (err) reject(err);
            files.forEach(file => {
                const origin = path.join(from, file);
                const dest = path.join(to, file);
                const data = fs.readFileSync(origin, 'utf-8');
                _recursiveMkDir(path.dirname(dest));
                fs.writeFileSync(dest, data);
                resolve();
            })
        })
    });
}

// Recursively create a dir.
function _recursiveMkDir(dir) {
    if (!fs.existsSync(dir)) {
        _recursiveMkDir(path.dirname(dir));
        fs.mkdirSync(dir);
    }
}



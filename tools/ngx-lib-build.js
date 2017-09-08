#!/usr/bin/env node

const builder = require('./builder');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

builder.build({rootFolder: path.resolve('..'), srcFolder : path.resolve('src', 'src', 'app')});

// if (argv.rootDir && argv.libDir) {
//     console.log('Starting with \n\trootDir='+path.resolve(argv.rootDir)+ '\n\t' + 'libDir='+path.resolve(argv.libDir));
//     builder.build({rootFolder: path.resolve(argv.rootDir), srcFolder : path.resolve(argv.libDir)});
// } else {
//     console.log('Usage e.g.: --rootDir . --libDir ./src/app');
//     console.log('Existing without doing anything');
// }



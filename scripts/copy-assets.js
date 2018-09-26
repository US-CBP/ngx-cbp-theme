var path = require('path');
var fs = require('fs');
var cpx = require('cpx');

var root = path.join(__dirname, '..');

function copyAssets() {
  var dest = path.join(root, 'dist', 'ngx-cbp-theme');
  var project = path.join(root, 'projects', 'ngx-cbp-theme');
  var schematics = path.join(project, 'schematics');
  var lib = path.join(project, 'src', 'lib');
  var destStyles = path.join(dest, 'styles');


  console.log('Copying ' + schematics + '/**/*.json to ' + path.join(dest, 'schematics'));
  cpx.copySync(schematics + '/**/*.json', path.join(dest, 'schematics'));

  if (!fs.existsSync(destStyles)) {
    fs.mkdirSync(destStyles);
  }
  console.log('Copying ' + lib + '/**/*.scss to ' + destStyles);
  cpx.copySync(lib + '/**/*.scss', destStyles);

  console.log('Copying ' + root + '/{README.md,LICENSE} to ' + dest);
  cpx.copySync(root + '/*{README.md,LICENSE}', dest);
}
copyAssets();


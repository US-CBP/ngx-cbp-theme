var path = require('path');
var fs = require('fs');
var cpx = require('cpx');

var root = path.join(__dirname, '..');

function copyAssets() {
  var dest = path.join(root, 'dist', 'ngx-cbp-theme');
  var project = path.join(root, 'projects', 'ngx-cbp-theme');
  var lib = path.join(project, 'src', 'lib');
  var destStyles = path.join(dest, 'styles');



  if (!fs.existsSync(destStyles)) {
    fs.mkdirSync(destStyles);
  }
  console.log('Copying ' + lib + '/**/*.scss to ' + destStyles);
  cpx.copySync(lib + '/**/*.scss', destStyles);

  console.log('Copying ' + root + '/{README.md,LICENSE} to ' + dest);
  cpx.copySync(root + '/*{README.md,LICENSE}', dest);
}
copyAssets();


var path = require('path');
var fs = require('fs');
var sourcePackageJson = require('../package.json');
var destPackageJson = require('../dist/ngx-cbp-theme/package.json');

function replacePackageVersion(){
  var packageJsonPath = path.join(__dirname, '..' ,'dist', 'ngx-cbp-theme', 'package.json' );
  destPackageJson.version = sourcePackageJson.version;
  destPackageJson.scripts = destPackageJson.scripts || {};
  fs.writeFileSync(packageJsonPath, JSON.stringify(destPackageJson, null, ' '));
}
replacePackageVersion();

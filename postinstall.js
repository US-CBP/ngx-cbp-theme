/**
 * Created by DGH6TV6 on 6/28/2017.
 */

var replace = require('replace');
var path = require('path');

function hackCbpThemeToPortableImports(){
  var base = __dirname;
  var nodeModulesDir =  base.replace(/^(.*?)(node_modules)(.*?)$/, '$1') + path.sep + 'node_modules';

  var cbpThemeScss = path.join(nodeModulesDir, 'cbp-theme' ,'dist', 'scss');
  replace({
      regex: /@import\s('|")(roboto-fontface|font-awesome)\/(.*?);/g,
      replacement: "@import $1~$2/$3;",
      paths: [cbpThemeScss],
      recursive: true,
      silent: false
   });

}

hackCbpThemeToPortableImports();




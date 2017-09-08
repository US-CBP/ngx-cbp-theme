var ngxLibraryBuilder = require('ngx-library-builder/lib/builder');
var path = require('path');
var process = require('process');


ngxLibraryBuilder.build({rootFolder: path.resolve('.'), srcFolder : path.resolve('src', 'app')}).then(() => {
    console.log('Build Completed Successfully ');
    process.exit(0);
}).catch((error) => {
    console.log('Build Failed ');
    console.log(error);
    process.exit(1);
});



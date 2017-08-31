var npmPublish = require('npm-git-publish');
var path = require('path');
var fs = require('fs');

var repoUrl = 'TODO-npm-repo-here';

var tempDir = '/temp/ngx-ui-cbp-publish-area';
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

var distDir = path.join(__dirname, '..', 'dist');

console.log(distDir);

npmPublish.publish( distDir, repoUrl, {tempDir: tempDir}).then(function(result){
    if (result.conclusion === npmPublish.publish.PUSHED) {
        console.log('Done');
    } else if (result.conclusion === npmPublish.publish.SKIPPED) {
        console.log('Skipped');
    } else if (result.conclusion === npmPublish.publish.CANCELLED) {
        console.log('Cancelled');
    }
});


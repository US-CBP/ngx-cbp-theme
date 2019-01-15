### Pages

This demo app a only for component development based on SystemJS which will compile TypeScript in the browser.

Please refer to `ngx-ui-cbp-kitchensink-cli` app for how usage of components instead of this which has many shortcuts etc.

Run `build:watch` from the main package.json

### Errors and such

```
ERROR in ./src/kitchensink.scss
Module build failed (from /path/to/project/ngx-cbp-theme/node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from /path/to/project/ngx-cbp-theme/node_modules/sass-loader/lib/loader.js):
@import '../../../dist/ngx-cbp-theme/styles/ngx-cbp-theme';
^
      File to import not found or unreadable: ../../../dist/ngx-cbp-theme/styles/ngx-cbp-theme.

```
During the build process `$ ng build`, the compiled CSS was not properly included
Run this at root: `$ node scripts/copy-assets.js` and you're good.
const path = require('path');
const fs = require('fs');
const ts = require('typescript');
const tslint = require('tslint');
const Linter = tslint.Linter;
const lintOptions = { fix: true};
let program = Linter.createProgram(path.join(__dirname, 'tsconfig.json'));
const sourceFileName = path.join(__dirname, 'my-files/src/public_api.ts');
const linter = new Linter(lintOptions, program);
const ruleClass = require('./schematics/update/rules/switchStylesheetAttributeSelectorsRule');
const rule = new ruleClass.Rule({ ruleName: 'check-inheritance'});


// let tsProgram = ts.createProgram(['my-files/src/lib/ngx-cbp-theme.scss'], { "root" : path.join(__dirname, 'my-files')});
// const sourceFiles = tsProgram.getSourceFiles();
// console.log(sourceFiles);

// linter.applyRule(rule);
const sourceContent = fs.readFileSync(sourceFileName);

const sourceFile = linter.getSourceFile(sourceFileName, sourceContent);
//rule.applyWithProgram(sourceFile, program);
rule.apply(sourceFile);



// const taskConfig = {
//   rulesDirectory: path.join(__dirname, '/schematics/update/rules'),
//   rules: {
//     // Automatic fixes.
//     "switch-identifiers": true,
//     "switch-property-names": true,
//     "switch-string-literal-attribute-selectors": true,
//     "switch-string-literal-css-names": true,
//     "switch-string-literal-element-selectors": true,
//     "switch-stylesheet-attribute-selectors": true,
//     "switch-stylesheet-css-names": true,
//     "switch-stylesheet-element-selectors": true,
//     "switch-stylesheet-input-names": true,
//     "switch-stylesheet-output-names": true,
//     "switch-template-attribute-selectors": true,
//     "switch-template-css-names": true,
//     "switch-template-element-selectors": true,
//     "switch-template-export-as-names": true,
//     "switch-template-input-names": true,
//     "switch-template-output-names": true,
//     // Additional issues we can detect but not automatically fix.
//     "check-class-declaration-misc": true,
//     "check-identifier-misc": true,
//     "check-import-misc": true,
//     "check-inheritance": true,
//     "check-method-calls": true,
//     "check-property-access-misc": true,
//     "check-template-misc": true
//   }
// };
// const taskOptions = {
//   silent: false,
//   tsConfigPath: program,
//   ignoreErrors: false
//   // includes: []
// }
//
// const  devkitTaskExecutor = require('@angular-devkit/schematics/tasks/tslint-fix/executor');
// const  devkitTaskClass = require('@angular-devkit/schematics/tasks/tslint-fix/task');
// const devkitTask = new devkitTaskClass.TslintFixTask(taskOptions, taskOptions);


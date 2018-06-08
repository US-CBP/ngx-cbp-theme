// "use strict";
//
// import {ckalk}
// const chalk_1 = require("chalk");
// const tslint_1 = require("tslint");
// const typescript_specifiers_1 = require("../material/typescript-specifiers");
// /**
//  * Rule that walks through every identifier that is part of Angular Material and replaces the
//  * outdated name with the new one.
//  */
// class Rule extends tslint_1.Rules.TypedRule {
//     applyWithProgram(sourceFile, program) {
//         return this.applyWithWalker(new CheckImportMiscWalker(sourceFile, this.getOptions(), program));
//     }
// }
// exports.Rule = Rule;
// class CheckImportMiscWalker extends tslint_1.ProgramAwareRuleWalker {
//     visitImportDeclaration(declaration) {
//         if (typescript_specifiers_1.isMaterialImportDeclaration(declaration)) {
//             declaration.importClause.namedBindings.forEachChild(n => {
//                 let importName = n.getFirstToken() && n.getFirstToken().getText();
//                 if (importName === 'SHOW_ANIMATION' || importName === 'HIDE_ANIMATION') {
//                     this.addFailureAtNode(n, `Found deprecated symbol "${chalk_1.red(importName)}" which has been removed`);
//                 }
//             });
//         }
//     }
// }
// exports.CheckImportMiscWalker = CheckImportMiscWalker;
// //# sourceMappingURL=checkImportMiscRule.js.map

import chalk from 'chalk';
import {ProgramAwareRuleWalker, RuleFailure, Rules} from 'tslint';
import * as ts from 'typescript';
import {isMaterialImportDeclaration} from '../material/typescript-specifiers';

console.log('here');
debugger;
/**
 * Rule that walks through every identifier that is part of Angular Material and replaces the
 * outdated name with the new one.
 */
export class Rule extends Rules.TypedRule {

  applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): RuleFailure[] {
    console.log('here2');
    debugger;
    return this.applyWithWalker(new CheckImportMiscWalker(sourceFile, this.getOptions(), program));
  }
}

export class CheckImportMiscWalker extends ProgramAwareRuleWalker {
  visitImportDeclaration(declaration: ts.ImportDeclaration) {
    console.log('here3');
    if (isMaterialImportDeclaration(declaration)) {
      declaration.importClause.namedBindings.forEachChild(n => {
        let importName = n.getFirstToken() && n.getFirstToken().getText();
        if (importName === 'SHOW_ANIMATION' || importName === 'HIDE_ANIMATION') {
          this.addFailureAtNode(
            n,
            `Found deprecated symbol "${chalk.red(importName)}" which has been removed`);
        }
      });
    }
  }
}

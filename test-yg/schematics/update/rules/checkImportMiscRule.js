"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var chalk_1 = require("chalk");
var tslint_1 = require("tslint");
var typescript_specifiers_1 = require("../material/typescript-specifiers");
/**
 * Rule that walks through every identifier that is part of Angular Material and replaces the
 * outdated name with the new one.
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithWalker(new CheckImportMiscWalker(sourceFile, this.getOptions(), program));
    };
    return Rule;
}(tslint_1.Rules.TypedRule));
exports.Rule = Rule;
var CheckImportMiscWalker = /** @class */ (function (_super) {
    __extends(CheckImportMiscWalker, _super);
    function CheckImportMiscWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckImportMiscWalker.prototype.visitImportDeclaration = function (declaration) {
        var _this = this;
        if (typescript_specifiers_1.isMaterialImportDeclaration(declaration)) {
            declaration.importClause.namedBindings.forEachChild(function (n) {
                var importName = n.getFirstToken() && n.getFirstToken().getText();
                if (importName === 'SHOW_ANIMATION' || importName === 'HIDE_ANIMATION') {
                    _this.addFailureAtNode(n, "Found deprecated symbol \"" + chalk_1["default"].red(importName) + "\" which has been removed");
                }
            });
        }
    };
    return CheckImportMiscWalker;
}(tslint_1.ProgramAwareRuleWalker));
exports.CheckImportMiscWalker = CheckImportMiscWalker;

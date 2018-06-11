import {Rule, SchematicContext, Tree, SchematicsException} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';


export default function (_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkgPath = '/package.json';
    const buffer = tree.read(pkgPath);
    if (buffer == null) {
      throw new SchematicsException('Could not read package.json');
    }
    const content = buffer.toString();
    const pkg = JSON.parse(content);

    if (pkg === null || typeof pkg !== 'object' || Array.isArray(pkg)) {
      throw new SchematicsException('Error reading package.json');
    }

    if (!pkg.dependencies) {
      pkg.dependencies = {};
    }
    if (!pkg.dependencies['@angular/cdk']) {
      pkg.dependencies['@angular/cdk'] = '5.0.3';
    }
    if (!pkg.dependencies['@angular/material']) {
      pkg.dependencies['@angular/material'] = '5.0.3';
    }

    pkg.dependencies['@angular/flex-layout'] = '6.0.0-beta.15';

    tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));
    context.addTask(new NodePackageInstallTask());

    return tree; // <3
  };
}

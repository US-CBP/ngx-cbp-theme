import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {addPackageToPackageJson} from '../utils';

const olderMaterialVersion = '5.0.3';

export default function (_options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    addPackageToPackageJson(host, 'dependencies', '@angular/cdk', olderMaterialVersion);
    addPackageToPackageJson(host, 'dependencies', '@angular/material', olderMaterialVersion);
    addPackageToPackageJson(host, 'dependencies', '@angular/flex-layout', '6.0.0-beta.15');

    context.addTask(new NodePackageInstallTask());

    return host; // <3
  };
}

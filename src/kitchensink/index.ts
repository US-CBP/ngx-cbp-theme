import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoAppModule } from './app/demo.module';


platformBrowserDynamic().bootstrapModule(DemoAppModule);
// tslint:disable-next-line:no-unused-variable
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

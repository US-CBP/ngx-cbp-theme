import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoAppModule } from './app/demo.module';


platformBrowserDynamic().bootstrapModule(DemoAppModule);

declare var module: NodeModule;
interface NodeModule {
    id: string;
}

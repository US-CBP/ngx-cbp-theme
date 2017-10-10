import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {TestEntryModule} from './test-module';


export * from './index';



platformBrowserDynamic().bootstrapModule(TestEntryModule);


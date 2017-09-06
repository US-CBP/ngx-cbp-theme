import { browser, by, element } from 'protractor';

export class DemoAppPage {
    navigateTo(): any {
        return browser.get('/');
    }

    getAppHeaderTitle(): any {
        return element(by.css('cbp-app-title h1')).getText();
    }

    getAppHeaderBrand(): any {
        return element(by.css('cbp-header .cbp-brand')).getText();
    }

    getAppHeaderBrandShort(): any {
        return element(by.css('cbp-header .cbp-brand-short')).getText();
    }
}

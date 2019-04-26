import { browser, by, element } from 'protractor';

export class DemoAppPage {
  navigateTo(): any {
    return browser.get('/');
  }

  getCurrentAppName(): any {
    return element(by.css('cbp-header .cbp-current-application-name')).getText();
  }

  getAppHeaderBrand(): any {
    return element(by.css('cbp-header .cbp-brand')).getText();
  }

  getAppHeaderBrandShort(): any {
    return element(by.css('cbp-header .cbp-brand-short')).getText();
  }
}

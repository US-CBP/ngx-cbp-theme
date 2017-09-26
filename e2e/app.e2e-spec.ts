import { DemoAppPage } from './app.po';

describe('ngx-cbp-theme-kitchensink-cli Demo App', () => {
    let page: DemoAppPage;

    beforeAll(() => {
        page = new DemoAppPage();
        page.navigateTo();
    });


    it('should display app header title', () => {
       expect(page.getCurrentAppName()).toEqual('Kitchen Sink Demo');
    });
});

import { DemoAppPage } from './app.po';

describe('ngx-ui-cbp-kitchensink-cli App', () => {
    let page: DemoAppPage;

    beforeAll(() => {
        page = new DemoAppPage();
        page.navigateTo();
    });


    it('should display app header title', () => {
       expect(page.getAppHeaderTitle()).toEqual('Kitchen Sink Demo');
    });
});

import { DemoAppPage } from './app.po';

describe('ngx-cbp-theme-kitchensink-cli Demo App', () => {
  let page: DemoAppPage;

  beforeAll((done: Function) => {
    page = new DemoAppPage();
    page.navigateTo().then(done);

  });


  it('should display app header title', () => {
    expect(page.getCurrentAppName()).toEqual('Kitchen Sink');
  });
});

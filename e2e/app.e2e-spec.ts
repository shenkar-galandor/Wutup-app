import { WutupAppPage } from './app.po';

describe('wutup-app App', () => {
  let page: WutupAppPage;

  beforeEach(() => {
    page = new WutupAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

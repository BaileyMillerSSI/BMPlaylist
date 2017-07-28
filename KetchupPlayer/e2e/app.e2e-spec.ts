import { KetchupPlayerPage } from './app.po';

describe('ketchup-player App', () => {
  let page: KetchupPlayerPage;

  beforeEach(() => {
    page = new KetchupPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { NgrxSandboxPage } from './app.po';

describe('ngrx-sandbox App', function() {
  let page: NgrxSandboxPage;

  beforeEach(() => {
    page = new NgrxSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

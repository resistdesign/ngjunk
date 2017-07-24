import { NgjunkPage } from './app.po';

describe('ngjunk App', () => {
  let page: NgjunkPage;

  beforeEach(() => {
    page = new NgjunkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

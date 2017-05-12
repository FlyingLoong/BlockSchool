import { SchoolblockClientTestPage } from './app.po';

describe('schoolblock-client-test App', () => {
  let page: SchoolblockClientTestPage;

  beforeEach(() => {
    page = new SchoolblockClientTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

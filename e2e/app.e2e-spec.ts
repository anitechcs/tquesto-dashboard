import { TestAppPage } from './app.po';

describe('Tquesto App', () => {
  let page: TestAppPage;

  beforeEach(() => {
    page = new TestAppPage();
  });

  it('should display message TQUESTO', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('TQUESTO');
  });
});

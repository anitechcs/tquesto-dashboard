import { TquestoDashboardPage } from './app.po';

describe('tquesto-dashboard App', function() {
  let page: TquestoDashboardPage;

  beforeEach(() => {
    page = new TquestoDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tq works!');
  });
});

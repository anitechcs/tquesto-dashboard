import { browser, element, by } from 'protractor';

export class TquestoDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tq-root h1')).getText();
  }
}

import { AngularRailsCrudPage } from './app.po';

describe('angular-rails-crud App', () => {
  let page: AngularRailsCrudPage;

  beforeEach(() => {
    page = new AngularRailsCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

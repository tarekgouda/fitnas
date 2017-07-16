import { FitNasAppPage } from './app.po';

describe('fit-nas-app App', () => {
  let page: FitNasAppPage;

  beforeEach(() => {
    page = new FitNasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

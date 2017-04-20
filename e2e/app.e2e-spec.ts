import { NabCollegePage } from './app.po';

describe('nab-college App', () => {
  let page: NabCollegePage;

  beforeEach(() => {
    page = new NabCollegePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

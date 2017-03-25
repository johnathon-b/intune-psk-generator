import { IntunePskGenPage } from './app.po';

describe('intune-psk-gen App', () => {
  let page: IntunePskGenPage;

  beforeEach(() => {
    page = new IntunePskGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

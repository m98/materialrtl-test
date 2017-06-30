import { MaterialRtlPage } from './app.po';

describe('material-rtl App', () => {
  let page: MaterialRtlPage;

  beforeEach(() => {
    page = new MaterialRtlPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

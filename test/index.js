import assert from 'power-assert';
import jsdom from 'mocha-jsdom';
// import app from '../lib/app.js';

describe('circleCiのテスト', ()=> {
  jsdom();

  it('テストが動作している', ()=> {
    const expected = true;
    assert(expected === true);
  });

  it('Vue由来のエレメントが生成出来る', ()=> {
    // document.body.innerHTML = '<div id="view"><add-status store="{{ stores }}"></add-status></div><script src="./index.js"></script>';

    // console.log(app);
    // app();
    // assert(_.isElement(AddStatusElement));
  });
});

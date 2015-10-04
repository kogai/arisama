import assert from 'power-assert';
import AddStatus from '../lib/app';

describe('circleCiのテスト', ()=> {
  it('テストが動作している', ()=> {
    const expected = true;
    assert(expected === true);
  });

  it('electron-mochaが動作している', ()=> {
    window.localStorage.setItem('blah', 'hello storage!!');
    const storaged = window.localStorage.getItem('blah');
    assert(storaged === 'hello storage!!');
  });
});

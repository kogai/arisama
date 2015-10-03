import assert from 'power-assert';

describe('circleCiのテスト', ()=> {
  it('テストが動作している', ()=> {
    const expected = true;
    assert(expected === true);
  });
});
/*
$(npm bin)/electron-mocha --compilers js:babel/register --watch --renderer
$(npm bin)/electron-mocha -r babel/register test/index.js
$(npm bin)/electron-mocha -r babel/register --renderer test/index.js
*/

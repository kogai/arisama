import assert from 'power-assert';
import addStatus from 'lib/add-status';

describe('addStatus', ()=> {
  it('should have a created hook', ()=> {
    assert(typeof addStatus.created === 'function');
  });

  it('should set correct default data', ()=> {
    const defaultData = addStatus.data();
    assert(typeof addStatus.data === 'function');
    assert(defaultData.msg === 'hello!');
  });
});

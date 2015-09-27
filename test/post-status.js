import assert from 'power-assert';
import _ from 'lodash';

import postStatus from '../lib/post-status';

describe('postStatus', ()=> {
  it('Vueクラスを継承していること', ()=> {
    assert(postStatus.super.name.toString() === 'Vue');
  });

  it('dataは関数をであること', ()=> {
    assert(typeof postStatus.options.data === 'function');
  });

  it('親コンポーネントからprops配列を受け取っていること', ()=> {
    assert(_.isArray(postStatus.options.props));
  });

  it('props配列にstoresが渡されていること', ()=> {
    assert(postStatus.options.props[0].name === 'stores');
  });

  it('onStatusChangeメソッドを持っていること', ()=> {
    assert(_.isFunction(postStatus.options.methods.onStatusChange));
  });
});

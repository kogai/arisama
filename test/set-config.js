import assert from 'power-assert';
import _ from 'lodash';

import setConfig from '../lib/set-config';

describe('setConfig', ()=> {
  it('Vueクラスを継承していること', ()=> {
    assert(setConfig.super.name.toString() === 'Vue');
  });

  it('dataは関数をであること', ()=> {
    assert(typeof setConfig.options.data === 'function');
  });

  it('親コンポーネントからprops配列を受け取っていること', ()=> {
    assert(_.isArray(setConfig.options.props));
  });

  it('props配列にstoresが渡されていること', ()=> {
    assert(setConfig.options.props[0].name === 'stores');
  });

  it('onSlackChangeメソッドを持っていること', ()=> {
    assert(_.isFunction(setConfig.options.methods.onSlackChange));
  });
});

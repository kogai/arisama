import assert from 'power-assert';
import _ from 'lodash';

import toggleConfig from '../lib/toggle-config';

describe('toggleConfig', ()=> {
  it('Vueクラスを継承していること', ()=> {
    assert(toggleConfig.super.name.toString() === 'Vue');
  });

  it('dataは関数をであること', ()=> {
    assert(typeof toggleConfig.options.data === 'function');
  });

  it('親コンポーネントからprops配列を受け取っていること', ()=> {
    assert(_.isArray(toggleConfig.options.props));
  });

  it('props配列にstoresが渡されていること', ()=> {
    assert(toggleConfig.options.props[0].name === 'stores');
  });

  it('onToggleSettingメソッドを持っていること', ()=> {
    assert(_.isFunction(toggleConfig.options.methods.onToggleSetting));
  });
});

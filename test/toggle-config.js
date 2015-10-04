import assert from 'power-assert';
import _ from 'lodash';

import toggleConfig from '../lib/toggle-config';
import createInstance from '../utils/testHelper/createInstance';

describe('toggleConfig', ()=> {
  let vueComponent;
  before(()=> {
    vueComponent = createInstance('toggle-config', toggleConfig);
  });

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

  it('初期状態では設定画面が開いていること', ()=> {
    assert(vueComponent.isConfigOpen === true);
  });

  it('設定画面を開閉できること', ()=> {
    vueComponent.onToggleSetting();
    assert(vueComponent.isConfigOpen === false);
    vueComponent.onToggleSetting();
    assert(vueComponent.isConfigOpen === true);
  });
});

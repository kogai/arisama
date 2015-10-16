import store from 'store';
import * as ja from './ja';
import * as en from './en';

function setLanguage() {
  switch (store.get('lang')) {
  case 'ja':
    return ja;
  case 'en':
    return en;
  default:
    if (window.navigator.language === 'ja') {
      return ja;
    }
    return en;
  }
}

export default setLanguage();
// export { setLanguage };

import * as ja from './ja';
import * as en from './en';

function setLanguage() {
  // if (window.navigator.language === 'ja') {
  //   return ja;
  // }
  return en;
}

export default setLanguage();

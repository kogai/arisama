const waitTime = 1000;
import {
  setConfig,
} from '../lang';

export default {
  shouldE2ETestEnabled(browser) {
    browser
      .init()
      .execute('window.localStorage.clear()', (result)=> {
        browser.assert.equal(result.state, 'success')
      })
      .waitForElementVisible('body', waitTime)
      .pause(waitTime)
      .assert.containsText('body', setConfig.slackauth.title)
      .assert.containsText('body', setConfig.slackauth.body)
      .end();
  },
};

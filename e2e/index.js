const waitTime = 1000;
import {
  setConfig,
} from '../lib/lang';

export default {
  shouldE2ETestEnabled(browser) {
    browser
      .init()
      .execute('window.localStorage.clear()', (result)=> {
        browser.assert.equal(result.state, 'success')
      })
      .waitForElementVisible('body', waitTime)
      .pause(waitTime)
      .assert.containsText('body', 'Slack account authentication')
      .assert.containsText('body', 'Please give permission to use your Slack account to this application')
      .end();
  },
};

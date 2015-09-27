const waitTime = 1000;
const applicationURL = 'http://localhost:8000';

export default {
  canConfigSet(browser) {
    browser
      .url(applicationURL)
      .waitForElementVisible('body', waitTime)
      .pause(1000)
      .setValue('input[name=slackurl]', 'https://api.test.com')
      .setValue('input[name=slacktoken]', 'mocktoken')
      .setValue('input[name=slackid]', 'mockid')
      .click('button[name=onslackchange]')
      .assert.containsText('body', '投稿先の設定')
      .assert.containsText('body', 'Webhook URL')
      .execute('if (window.localStorage) { window.localStorage.clear(); return true; }', (result)=> {
        browser.assert.equal(result.value, false);
      })
      .end();
  },
};

// error: "invalid_auth"
// ok: false

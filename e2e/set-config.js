const waitTime = 1000;

export default {
  canConfigSet(browser) {
    browser
      .init()
      .waitForElementVisible('body', waitTime)
      .pause(1000)
      .setValue('input[name=slackurl]', 'https://api.test.com')
      .click('button[name=onslackchange]')
      .assert.containsText('body', 'ステータスの更新')
      .execute('if (window.localStorage) { window.localStorage.clear(); return true; }', (result)=> {
        browser.assert.equal(result.value, true);
      })
      .end();
  },
};

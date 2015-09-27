const waitTime = 1000;
const applicationURL = 'http://localhost:8000';

export default {
  shouldE2ETestEnabled(browser) {
    browser
      .url(applicationURL)
      .waitForElementVisible('body', waitTime)
      .pause(1000)
      .assert.containsText('body', '投稿先の設定')
      .assert.containsText('body', 'Webhook URL')
      .end();
  },
};

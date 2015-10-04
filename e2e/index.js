const waitTime = 1000;

export default {
  shouldE2ETestEnabled(browser) {
    browser
      .init()
      .execute('window.localStorage.clear()', (result)=> {
        browser.assert.equal(result.state, 'success')
      })
      .waitForElementVisible('body', waitTime)
      .pause(waitTime)
      .assert.containsText('body', '投稿するチャンネルとアカウントの設定')
      .assert.containsText('body', 'Slackアカウント認証')
      .assert.containsText('body', 'このアプリケーションにあなたのSlackアカウントを利用する許可を与えて下さい');
      .end();
  },
};

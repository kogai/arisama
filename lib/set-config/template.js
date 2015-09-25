const template = `
<article class="mb-20">
  <label for="slackurl">
    <h2>Webhook URL</h2>
    <input type="text" placeholder="Webhook URL" v-model="slackurl">
  </label>
  <label for="slacktoken">
    <h2>チームトークン</h2>
    <input type="text" placeholder="チームトークン" v-model="slacktoken">
  </label>
  <label for="slackid">
    <h2>ユーザーID</h2>
    <input type="text" placeholder="ユーザーID" v-model="slackid">
  </label>
  <button v-on="click: onSlackChange">更新</button>
</article>
`;

export default template;

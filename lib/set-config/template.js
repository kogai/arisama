const template = `
<div>
  <article class="mb-20" v-if="isConfigOpen">
    <label for="slackurl">
      <h2>Webhook URL</h2>
      <input type="text" name="slackurl" placeholder="Webhook URL" v-model="slack.url">
    </label>
    <label for="slacktoken">
      <h2>チームトークン</h2>
      <input type="text" name="slacktoken" placeholder="チームトークン" v-model="slack.token">
    </label>
    <label for="slackid">
      <h2>ユーザーID</h2>
      <input type="text" name="slackid" placeholder="ユーザーID" v-model="slack.id">
    </label>
    <button v-on="click: onSlackChange" name="onslackchange">更新</button>
  </article>
</div>
`;

export default template;

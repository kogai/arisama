const template = `
<div>
  <article class="mb-20" v-if="isConfigOpen">
    <label for="slackauth">
      <h2>Slackアカウントの認証</h2>
      <button v-on='click: onAuthStart'>認証</button>
    </label>
    <label for="slackurl">
      <h2>Webhook URL</h2>
      <input type="text" name="slackurl" placeholder="Webhook URL" v-model="slack.url">
    </label>
    <button v-on="click: onSlackChange" name="onslackchange">更新</button>
  </article>
</div>
`;

export default template;

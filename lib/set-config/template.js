const template = `
<div>
  <article class="mb-20" v-if="isSlackRegistered && isConfigOpen">
    <h2>認証済みのアカウント</h2>
    <div class="registerd-account">
      <img v-attr="src: user.profile.image_32" alt="{{ user.name }}" class="registerd-account__img" />
      {{ user.name }}
    </div>
  </article>
  <article class="mb-20" v-if="isConfigOpen">
    <label for="slackauth" v-if="!isSlackRegistered">
      <h2>Slackアカウント認証</h2>
      <p>このアプリケーションにあなたのSlackアカウントを利用する許可を与えて下さい</p>
      <button v-on='click: onAuthStart'>許可を与える</button>
    </label>
    <label for="slackurl" v-if="isWebhookReady">
      <h2>Webhook URL</h2>
      <p>投稿したいチャンネルのWebhook URLを指定して下さい</p>
      <input type="text" name="slackurl" placeholder="Webhook URL" v-model="slack.url">
    </label>
    <button v-if="isWebhookReady" v-on="click: onSlackChange(slack)" name="onslackchange">更新</button>
  </article>
</div>
`;

export default template;

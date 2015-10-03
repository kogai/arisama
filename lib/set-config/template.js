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
      <h2>Slackアカウントの認証</h2>
      <button v-on='click: onAuthStart'>認証</button>
    </label>
    <label for="slackurl">
      <h2>Webhook URL</h2>
      <input type="text" name="slackurl" placeholder="Webhook URL" v-model="slack.url">
    </label>
    <button v-on="click: onSlackChange(slack)" name="onslackchange">更新</button>
  </article>
</div>
`;

export default template;

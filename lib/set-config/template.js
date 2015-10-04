import { setConfig } from '../lang';

const template = `
<div>
  <article class="mb-20" v-if="isSlackRegistered && isConfigOpen">
    <h2>${ setConfig.title }</h2>
    <div class="registerd-account">
      <img v-attr="src: user.profile.image_32" alt="{{ user.name }}" class="registerd-account__img" />
      {{ user.name }}
    </div>
  </article>
  <article class="mb-20" v-if="isConfigOpen">
    <label for="slackauth" v-if="!isSlackRegistered">
      <h2>${ setConfig.slackauth.title }</h2>
      <p>${ setConfig.slackauth.body }</p>
      <button v-on='click: onAuthStart'>${ setConfig.slackauth.button }</button>
    </label>
    <label for="slackurl" v-if="isWebhookReady">
      <h2>${ setConfig.slackurl.title }</h2>
      <p>${ setConfig.slackurl.body }</p>
      <input type="text" name="slackurl" placeholder="Webhook URL" v-model="slack.url">
    </label>
    <button v-if="isWebhookReady" v-on="click: onSlackChange(slack)" name="onslackchange">${ setConfig.slackurl.button }</button>
  </article>
</div>
`;

export default template;

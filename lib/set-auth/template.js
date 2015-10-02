const template = `
<article>
  <button v-if="!hasSlackToken" v-on='click: onAuthStart'>認証</button>
  <ul v-if="hasSlackToken">
    <li v-repeat="slackUser in slackUsers">
      <button v-on="click: selectUser(slackUser.id)">{{ slackUser.name }}</button>
    </li>
  </ul>
</article>
`;

export default template;

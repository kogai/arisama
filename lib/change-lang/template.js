import { changeLang } from '../lang';

const template = `
<article>
  <div class="mt-10" v-if="isConfigOpen && isSlackRegistered">
    <h2>${ changeLang.title }</h1>
    <ul>
      <li v-on="click: onChangeLang('ja')">日本語</li>
      <li class="button--english" v-on="click: onChangeLang('en')">English</li>
    </ul>
  </div>
</article>
`;

export default template;

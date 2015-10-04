import {toggleConfig} from '../lang';

console.log(toggleConfig);

const template = `
<article class="mt-10">
  <button class="small" v-if="!isConfigOpen" v-on="click: onToggleSetting">${toggleConfig.openConfig}</button>
  <button class="small" v-if="isConfigOpen" v-on="click: onToggleSetting">${toggleConfig.closeConfig}</button>
</article>
`;

export default template;

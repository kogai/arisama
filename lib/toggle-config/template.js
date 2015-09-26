const template = `
<article class="mt-10">
  <button class="small" v-if="!isConfigOpen" v-on="click: onToggleSetting">設定を開く</button>
  <button class="small" v-if="isConfigOpen" v-on="click: onToggleSetting">設定を閉じる</button>
</article>
`;

export default template;

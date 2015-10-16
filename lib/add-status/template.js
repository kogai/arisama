import { addStatus } from '../lang';

const template = `
<article>
  <div v-if="isConfigOpen && isSlackRegistered">
    <h1>${ addStatus.title }</h1>
      <label for="newStatus[message]">
        <h2>${ addStatus.message.title }</h2>
        <input type="text" v-model="newStatus.message" placeholder="${ addStatus.message.placeholder }">
      </label>
      <label for="newStatus[emoji]">
        <h2>${ addStatus.emoji.title }</h2>
        <input type="text" v-model="newStatus.emoji" placeholder="${ addStatus.emoji.placeholder }">
      </label>
    <button v-on="click: onStatusAdd">${ addStatus.button }</button>
  </div>
</article>
`;

export default template;

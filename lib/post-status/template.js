import { postStatus } from '../lang';

const template = `
<section>
  <div v-if="isSlackRegistered">
    <h1>${ postStatus.title }</h1>
    <select name="status" id="status" v-model="changedStatus" options="statuses"></select>
    <button v-if="!isPosting" v-on="click: onStatusChange(changedStatus)">${ postStatus.button }</button>
    <div v-if="isPosting">${ postStatus.isPosting }</div>
  </div>
</section>
`;

export default template;

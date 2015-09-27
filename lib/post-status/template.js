const template = `
<section>
  <div v-if="isSlackRegistered">
    <h1>ステータスの更新</h1>
    <select name="status" id="status" v-model="changedStatus" options="statuses"></select>
    <button v-if="!isPosting" v-on="click: onStatusChange(changedStatus)">更新</button>
    <div v-if="isPosting">送信中...</div>
  </div>
</section>
`;

export default template;

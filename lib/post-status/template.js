const template = `
<section>
  <div v-if="isSlackRegistered">
    <h1>ステータスの更新</h1>
    <select name="status" id="status" v-model="changedStatus">
      <option v-repeat="status in statuses" value="{{ status.emoji + ' ' +status.message }}">{{ status.message }}</option>
    </select>
    <button v-on="click: onStatusChange(changedStatus)">更新</button>
  </div>
</section>
`;

export default template;

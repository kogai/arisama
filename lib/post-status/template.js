const template = `
<section>
  <h1>ステータスの更新</h1>
  <select name="status" id="status" v-model="changedStatus" options="statuses">
    <option v-repeat="status in statuses" value="{{ status.emoji + ' ' +status.message }}">{{ status.message }}</option>
  </select>
  <button v-on="click: onStatusChange(changedStatus)">更新</button>
</section>
`;

export default template;

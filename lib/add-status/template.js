const template = `
<article v-if="isSlackRegistered && !isSettingOpen">
  <h1>投稿するステータスの追加</h1>
    <label for="newStatus[emoji]">
      <h2>投稿する絵文字</h2>
      <input type="text" v-model="newStatus.emoji" placeholder=":rice:">
    </label>
    <label for="newStatus[message]">
      <h2>投稿する文言</h2>
      <input type="text" v-model="newStatus.message" placeholder="食事中です">
    </label>
  <button v-on="click: onStatusAdd">更新</button>
</article>
`;

export default template;

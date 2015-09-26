const template = `
<article>
  <div v-if="isConfigOpen && isSlackRegistered">
    <h1>投稿するステータスの追加</h1>
      <label for="newStatus[emoji]">
        <h2>投稿する絵文字</h2>
        <input type="text" v-model="newStatus.emoji" placeholder="例: :rice:">
      </label>
      <label for="newStatus[message]">
        <h2>投稿する文言</h2>
        <input type="text" v-model="newStatus.message" placeholder="例: 食事中です">
      </label>
    <button v-on="click: onStatusAdd">更新</button>
  </div>
</article>
`;

export default template;

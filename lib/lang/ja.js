const title = '設定の編集';
const setConfig = {
  title: '認証済みのアカウント',
  slackauth: {
    title: 'Slackアカウント認証',
    body: 'このアプリケーションにあなたのSlackアカウントを利用する許可を与えて下さい',
    button: '許可を与える',
  },
  slackurl: {
    title: 'Webhook URL',
    body: '投稿したいチャンネルのWebhook URLを指定して下さい',
    button: '更新',
  },
};

const postStatus = {
  'title': 'ステータスの更新',
  'button': '更新',
  'isPosting': '送信中...',
  'initialSelected': ':computer: 業務中です',
};

const addStatus = {
  'title': '投稿するステータスの追加',
  'emoji': {
    title: '投稿する絵文字',
    placeholder: '例: :rice:',
  },
  'message': {
    title: '投稿する文言',
    placeholder: '例: 食事中です',
  },
  button: '更新',
};

const changeLang = {
  title: '言語設定を変更する',
};

const toggleConfig = {
  'openConfig': '設定を開く',
  'closeConfig': '設定を閉じる',
};

const defaultStatuses = [
  { message: '業務中です', emoji: ':computer:' },
  { message: '電話中です', emoji: ':telephone_receiver:' },
  { message: '食事中です', emoji: ':rice:' },
  { message: '休憩中です', emoji: ':coffee:' },
  { message: '昼寝中です', emoji: ':sleeping:' },
  { message: '移動中です', emoji: ':train:' },
  { message: '離席中です', emoji: ':no_bell:' },
  { message: '集中してます', emoji: ':name_badge:' },
  { message: '退勤しました', emoji: ':name_badge:' },
];

export {
  title,
  setConfig,
  postStatus,
  addStatus,
  changeLang,
  toggleConfig,
  defaultStatuses,
};

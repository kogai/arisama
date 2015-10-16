const title = 'Edit setting';
const setConfig = {
  title: 'Authenticated account',
  slackauth: {
    title: 'Slack account authentication',
    body: 'Please give permission to use your Slack account to this application',
    button: 'Give Permission',
  },
  slackurl: {
    title: 'Webhook URL',
    body: 'Please specify the Webhook URL of the channel you want to post',
    button: 'Update',
  },
};

const addStatus = {
  'title': 'Additional post status',
  'emoji': {
    title: 'Post emoji',
    placeholder: 'Example: :rice:',
  },
  'message': {
    title: 'Post message',
    placeholder: 'Example: During a meal',
  },
  button: 'Update',
};

const changeLang = {
  title: 'Change language',
};

const postStatus = {
  'title': 'Status updates',
  'button': 'Update',
  'isPosting': 'Sending...',
  'initialSelected': ':computer: During business',
};

const toggleConfig = {
  'openConfig': 'Open Configuration',
  'closeConfig': 'Close Configuration',
};

const defaultStatuses = [
  { message: 'During business', emoji: ':computer:' },
  { message: 'During a telephone call', emoji: ':telephone_receiver:' },
  { message: 'During a meal', emoji: ':rice:' },
  { message: 'During a break', emoji: ':coffee:' },
  { message: 'During a nap', emoji: ':sleeping:' },
  { message: 'During the move', emoji: ':train:' },
  { message: 'Away', emoji: ':no_bell:' },
  { message: 'Concentrated has', emoji: ':name_badge:' },
  { message: 'It was clock-out', emoji: ':name_badge:' },
];

export {
  title,
  setConfig,
  addStatus,
  changeLang,
  postStatus,
  toggleConfig,
  defaultStatuses,
};

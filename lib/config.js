export default {
  endpoints: {
    slackUserInfo: 'https://slack.com/api/users.info',
  },
};

export const defaultStatuses = [
  { message: '電話中です', emoji: ':telephone_receiver:' },
  { message: '食事中です', emoji: ':rice:' },
  { message: '休憩中です', emoji: ':coffee:' },
  { message: '移動中です', emoji: ':train:' },
  { message: '業務中です', emoji: ':computer:' },
  { message: '離席してます', emoji: ':no_bell:' },
  { message: '集中してます', emoji: ':name_badge:' },
];

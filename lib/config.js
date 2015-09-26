export default {
  endpoints: {
    slackUserInfo: 'https://slack.com/api/users.info',
  },
};

export const defaultStatuses = [
  { message: '食事中です', emoji: ':rice:' },
  { message: '離席してます', emoji: ':no_bell:' },
  { message: '集中してます', emoji: ':name_badge:' },
];

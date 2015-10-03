import store from 'store';

const defaultSlack = {
  url: '',
  access_token: '',
  id: '',
};

const defaultStatuses = [
  { message: '電話中です', emoji: ':telephone_receiver:' },
  { message: '食事中です', emoji: ':rice:' },
  { message: '休憩中です', emoji: ':coffee:' },
  { message: '移動中です', emoji: ':train:' },
  { message: '業務中です', emoji: ':computer:' },
  { message: '離席してます', emoji: ':no_bell:' },
  { message: '集中してます', emoji: ':name_badge:' },
  { message: '退勤しました', emoji: ':name_badge:' },
];

const defaultUser = null;

const initialSlack = store.get('slack') || defaultSlack;
const initialStatuses = store.get('statuses') || defaultStatuses;
const initialUser = store.get('user') || defaultUser;
const initialSlackRegistration = (()=> {
  if (initialSlack.url && initialSlack.access_token && initialSlack.id) {
    return true;
  }
  return false;
}());

store.set('statuses', initialStatuses);

export default {
  slack: initialSlack,
  statuses: initialStatuses,
  user: initialUser,
  slackRegistration: initialSlackRegistration,
};

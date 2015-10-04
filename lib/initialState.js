import store from 'store';
import { defaultStatuses } from './lang';

const defaultSlack = {
  url: '',
  access_token: '',
  id: '',
};

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

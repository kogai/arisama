let endpoints;
if (process.env.NODE_ENV === 'test') {
  endpoints = {
    slackUserInfo: 'http://localhost:8000/api/users.info',
  };
}else {
  endpoints = {
    slackUserInfo: 'https://slack.com/api/users.info',
  };
}

export default {
  endpoints: endpoints,
};

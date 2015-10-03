let endpoints;
if (process.env.NODE_ENV === 'test') {
  endpoints = {
    slackUserInfo: 'http://localhost:8000/api/users.info',
    slackOauthAuth: 'https://slack.com/oauth/authorize',
    slackOauthAccess: 'https://slack.com/api/oauth.access',
    authServer: 'http://localhost:9000/auth/callback',
  };
}else {
  endpoints = {
    slackUserInfo: 'https://slack.com/api/users.info',
    slackOauthAuth: 'https://slack.com/oauth/authorize',
    slackOauthAccess: 'https://slack.com/api/oauth.access',
    authServer: 'https://arisama.herokuapp.com/auth/callback',
  };
}

export default {
  endpoints: endpoints,
};

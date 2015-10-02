import path from 'path';

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import uuid from 'uuid';
import request from 'superagent';

import config from '../lib/config';

const app = express();
const router = express.Router();
const clientId = process.env.SLACK_CLIENT_ID;
const clientSecret = process.env.SLACK_CLIENT_SECRET;
const authServer = config.endpoints.authServer;
const slackOauthAuth = config.endpoints.slackOauthAuth;
const slackOauthAccess = config.endpoints.slackOauthAccess;

let code;

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cookieParser());

router.get('/auth', (req, res)=> {
  const baseUrl = 'http://localhost:9000/auth/callback';
  code = uuid.v1();

  const uri = `https://slack.com/oauth/authorize?client_id=${clientId}&redirect_uri=${baseUrl}&state=${code}`;
  res.redirect(uri);
});

router.get('/auth/callback', (req, res)=> {
  res.sendfile('./authServer/index.html');
  /*
  const uri = `https://slack.com/api/oauth.access?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;
  request
  .get(uri)
  .query({
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
  })
  .end((err, ret)=> {
    if (err) {
      return console.log(err);
    }
    console.log(ret.body.access_token);
    res.status(200).send(ret.body);
  });
  */
});

app.use(router);

app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), ()=> {
  console.log('Authentication server listening on port ' + app.get('port'));
});

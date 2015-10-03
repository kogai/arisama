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
const slackOauthAuth = config.endpoints.slackOauthAuth;
const slackOauthAccess = config.endpoints.slackOauthAccess;
const authServer = config.endpoints.authServer;

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cookieParser());

router.get('/auth', (req, res)=> {
  const state = uuid.v1();
  const uri = `${slackOauthAuth}?client_id=${clientId}&state=${state}&redirect_uri=${authServer}`;
  res.redirect(uri);
});

router.get('/auth/callback', (req, res)=> {
  const queries = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code,
    redirect_uri: authServer,
  };
  console.log(queries);

  request
    .get(slackOauthAccess)
    .query(queries)
    .end((err, ret)=> {
      if (err) {
        return console.log(`error: err${err}`);
      }
      const accessToken = ret.body.access_token;
      const teamName = ret.body.team_name;
      console.log(ret.body);
      res.redirect(`/?access_token=${accessToken}&team_name=${teamName}`);
    });
});

router.get('/auth/send', (req, res)=> {
  // クエリを受け取ってindex.htmlを描画
  res.sendfile('./authServer/index.html');
});

app.use(router);

app.set('port', process.env.PORT || 9000);

export default app;

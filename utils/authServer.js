const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cookieParser());

router.get('/auth', (req, res)=> {
  const baseUrl = 'http://localhost:9000/auth/callback';
  const clientId = process.env.SLACK_CLIENT_ID;
  console.log(clientId);
  const uri = `https://slack.com/oauth/authorize?client_id=${clientId}&redirect_uri=${baseUrl}`;
  res.redirect(uri);
});

router.get('/auth/callback', (req, res)=> {
  res.status(200).sendfile('./utils/authServer.html');
});

app.use(router);

app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), ()=> {
  console.log('Authentication server listening on port ' + app.get('port'));
});

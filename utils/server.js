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

router.get('/api/users.info', (req, res)=> {
  if (req.query.token && req.query.user) {
    return res.status(200).send({
      ok: 'true',
      user: {
        name: 'mockUserID',
        profile: {
          image_72: 'mockUserImagePath',
        },
      },
    });
  }
  res.send(400).send({
    ok: 'false',
  });
});

app.use(router);

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), ()=> {
  console.log('Express server listening on port ' + app.get('port'));
});

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(cookieParser());
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), ()=> {
  console.log('Express server listening on port ' + app.get('port'));
});

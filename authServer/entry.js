require('babel/register');

const server = require('./server');

server.listen(server.get('port'), ()=> {
  console.log('Authentication server listening on port ' + server.get('port'));
});

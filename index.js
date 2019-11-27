let restify  = require('restify');
let mongoose = require('mongoose');
    
mongoose.connect('mongodb://localhost:27017/backend');

let server = restify.createServer();

server.use(restify.bodyParser({ mapParams: true }));

require('./index_route')(server);

server.listen(8000, function() {
  console.log(server.name + ' listening at ' + server.url);
});
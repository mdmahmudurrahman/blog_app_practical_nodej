var express = require('express');

var http = require('http');
var path = require('path');

// the Express.js object is instantiated
var app = express();

// One of the ways to configure Express.js settings is to use app.set()
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Set the view engine
app.set('view engine', 'jade');

// catch requests of all methods on all URLs (* wildcard)
app.all('*', function(req, res) {
  res.render(
    'index',
     {msg: 'Welcome to the Practical Node.js!'}
  );
});

// instructions to start the server
http
  .createServer(app)
  .listen(app.get('port'), function(){
      console.log(
       'Express.js server listening on port ' +
        app.get('port')
      );
    }
  );


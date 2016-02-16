var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

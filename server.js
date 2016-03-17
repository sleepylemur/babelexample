var express = require('express');
var app = express();

app.use('/build', express.static(__dirname + '/build'));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('listening to port 3000');
});

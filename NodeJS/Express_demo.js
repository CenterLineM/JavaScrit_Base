/**
 * 
 */

const express = require('express');
const http = require('http');

const app = express();
app.get('/', function (req, res) {
  res.send('hi');
});

const server = http.createServer(app).listen(8080, function(err) {
  if (err) {
    console.log(err);
  } else {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening on ${host}:${port}`);
  }
});
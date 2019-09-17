//erte
const nodemon = require('nodemon');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
//const getRepos = require('/Users/marcus/Code/rpt15-fullstack-review/helpers/github.js');
//const saveToDB = require('/Users/marcus/Code/rpt15-fullstack-review/database/index.js');
//const seed = require('/Users/marcus/Code/you-may-like/seed.js');



let app = express();
app.use(bodyParser());

app.use(express.static('./public'));

let port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



// app.get('/youMayLike', function (req, res) {
//   request({
//     url: 'http://127.0.0.1:1128/shoes',
//     method: 'GET'
//   }, function(err, response, body) {
//     res.send(body);
//   })
//   console.log('got a proxy request, son');
// });

// app.put('/shoes', function(req, res) {
//   console.log('i dont even care anymore bro');
//   seed.seed();
//   res.end()
// })

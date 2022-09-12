var express = require('express');
var app = express();
var sql = require("mssql/msnodesqlv8");
// var dbconfig = require("./dbconfig/dbconfig")
 const routes = require('./route/router');



 app.use(express.json());
 
 app.use('/', routes); 

//app.get('/app', function (req, res) {

 

 // config for your database
  // var config = {
  //   user: "sa",
  //   password: "neo27115",
  //   database: 'JAIHINDCOUIRER',
  //   server: 'NEO8',
  //   driver: 'msnodesqlv8',
  //   options: {
  //     trustedConnection: true
  //   }
  // };

  // connect to your database
//   sql.connect(dbconfig.config, function (err) {

//     if (err) console.log(err);

//     // create Request object
//     var request = new sql.Request();

//     // query to the database and get the records
//     request.query('select * from DestinationMast', function (err, recordset) {

//       if (err) console.log(err)

//       // send records as a response
//       res.send(recordset);

//     });
//   });
// });

var server = app.listen(5000, function () {
  console.log('Server is running..');
});








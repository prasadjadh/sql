const dbconfig = require("../dbconfig/db")
const sql = require("mssql/msnodesqlv8");


const getAllData =async function (req, res) {

     // connect to your database
     await sql.connect(dbconfig.config, function (err) {
   
       if (err) console.log(err);
   
       // create Request object
       var request = new sql.Request();
   
       // query to the database and get the records
      request.query("select * from DestinationMast", function (err, recordset) {
   
         if (err) console.log(err)
   
         // send records as a response
         res.send(recordset);
   
       });
     });
   };

   module.exports = {getAllData}
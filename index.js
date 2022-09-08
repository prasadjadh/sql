var sql = require('mssql/msnodesqlv8');

var config = {
    user:"sa",
    password:"neo27115",
    database : 'KNK',
    server:'NEO1',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection :true
    }
};
sql.connect(config,function(err){
    if(err){
        console.log(err);
    }
    var request = new sql.Request();
    request.query('select * from EmployeeMast',function(err,recordSet){
        if(err){
            console.log(err)
        }else{console.log(recordSet)}
    })
})






























// var Order = require("./order");
// const dboperations = require("./dboperations");

// var express = require("express");
// var bodyParser = require("body-parser")
// var cors = require("cors");
// var app = express();
// var router = express.Router();

// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);








// var port = process.env.PORT || 8090;
// app.listen(port);
// console.log("Order api is running at " + port);

// dboperations.getOrders().then(result =>{
//     console.log(result)
// })


// // var {createPool} = require('mysql');

// // var con = createPool({
// //        host:"localhost",
// //        user:"sa",
// //        password:"neo27115",
// //     //    server:"NEO1",
// //        database :"KNK",
// //     //   options: {
// //     //          trustedconnection: true,
// //     //          enableArithAort: true, 
// //     //         instancename:"NEO1"
    
// //     //  }
// // });

// // con.query(`select*from EmployeeMast`,(err,result, fields) => {
// //     if(err){
// //         return console.log(err);
// //     }
// //     return console.log(result);
// })
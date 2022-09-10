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
  request.query("select Destination_Code , Destination_Name from destinationmast where Destination_Name='thane'",function(err,recordSet){
        if(err){
            console.log(err)
        }else{console.log(recordSet)}
    })
})
















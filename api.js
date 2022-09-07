var Order = require("./order");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser")
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);








var port = process.env.PORT || 8090;
app.listen(port);
console.log("Order api is running at " + port);

dboperations.getOrders().then(result =>{
    console.log(result)
})
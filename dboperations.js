var config = require("./dbconfig");
const sql = require("mssql");
const { request } = require("express");



async function getOrders(){
   
        let pool = await sql.connect(config);
        let products =await pool.request().query("SETECT * from EmployeeMast");
        console.log(products)
    
}

module.exports = {
    getOrders:getOrders
}

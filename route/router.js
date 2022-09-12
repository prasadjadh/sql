const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const userController = require('../controller/userController'); 


router.get('/app', userController.getAllData);


module.exports = router; // export to use in server.js
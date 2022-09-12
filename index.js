var express = require('express');
var app = express();

 const routes = require('./route/router');
 app.use(express.json());
 
 app.use('/', routes); 





 app.listen(process.env.PORT || 5000, function () {
    console.log('Server running on port ' + (process.env.PORT || 5000))
});


// Entry Point of the API Server 
  
const express = require('express');
const multer = require('multer');
const { route } = require('./route');
/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();
  
  
/* To handle the HTTP Methods Body Parser 
   is used, Generally used to extract the 
   entire body portion of an incoming 
   request stream and exposes it on req.body 
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route)
  
// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(3000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})
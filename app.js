/*
   From here this is where the rest of the course will focus
*/

// We get http from the NodeJS core.
var http = require('http');

// This is an event listener
// This function will be executed when a request happens
http.createServer(function(req, res){
    // res sends information back.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n My name is Rafael \n');

}).listen(1337, '127.0.0.1');
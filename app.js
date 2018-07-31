// We get http and fs from the NodeJS core.
var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    // res is a writable stream.
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1'); 
var http = require('http');
var balance = require('./formatBalance');

http.createServer(function(req, res){
   res.writeHead(200);
    res.write(balance.text() + balance.balance());
    res.end();
}).listen(8000);
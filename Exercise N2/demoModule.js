var http = require('http');
var dt = require('./myModule');
http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("The date(Jan 26) and time are when this Exercise is done, " + dt.myDate());
            res.end();
            }).listen(8080);
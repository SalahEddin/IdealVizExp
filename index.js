var http = require('http');
var dt = require('./testmodules');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    //res.end('Hello Worlds! '+ dt.myDateTime());
}).listen(8080);
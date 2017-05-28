var http = require('http');
var dt = require('./testmodules');
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('demotest.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8080);
var http = require("http");
var url = require("url");
var socket = require("socket.io");
var filepath = __dirname + "result.xls";
var fs = require("fs");
var xlxs = require("node-xlsx");

var app = http.createServer(function(req, res) {
    var pathname = decodeURIComponent(url.parse(req.url).pathname);
    if(pathname == '/favicon.ico') {
        return;
    }
    switch(pathname) {
        case '/':
        case '/index':
            index(res);
            break;
        default:
            return;
    }

});

app.listen(1234, "192.168.56.101");

function index(res) {
    var page = fs.readFileSync(__dirname + "/" + url.parse("index.html").pathname, "utf-8" );
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(page);
}

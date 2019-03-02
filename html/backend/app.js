var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req, res) {
    req.on("data", function(data) {
        console.log("服务器收到的数据：" + decodeURIComponent(data))
    })
    req.on("end", function() {
        console.log("客户端请求数据全部接受完毕")
    })
    res.end()
}).listen(3344, "192.168.56.101", function() {
    console.log("listen on 3344");
})
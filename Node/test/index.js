var express = require("express");
var app = express(); //產生Express Applcation 物件
app.get("/", function(req, res) { // 當 client 連線 server 的 根目錄 / 時 做出回應
    res.send("<h1> Hello  NodeJS <h1> ");


});

app.get("/mypage", function(req, res) {
    res.send(" Hi I am here.");
});

app.get("/homepage", function(req, res) {
    res.send("OK");
});



app.listen(3000, function() {
    console.log("Server 已經啟動在 http://localhost:3000/");
})
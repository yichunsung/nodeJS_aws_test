
/* 

 Loading the packages

*/

// 載入Express 套件
let express = require("express");
// Python Shell
let PythonShell = require('python-shell');
// Express.js object Building
let app = express();


app.get("/", function (req, res) {
	// body...
	res.send("<html><head><meta charset='utf-8'><title>Hello AWS</title></head><body><h1>Hello AWS world!</h1><hr /> <h2>你好abc好車網</h2></body></html>");
})

app.listen(3000, function(){
	console.log("Data Server is start in port 3000");
	
});

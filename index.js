/* 

 Loading the packages

*/

// 載入Express 套件
let express = require("express");
// Python Shell
let PythonShell = require('python-shell');
// R-Script
var R = require("r-script");
// Express.js object Building
let app = express();
/*

載入靜態頁面

*/
app.use(express.static("www"));



// 首頁
app.get("/", function(req, res){

});


app.get("/outputData", function(req, res){
	// Data loading
	year = req.query.year;
	cc = req.query.cc;
	countYear = req.query.countYear;
	mileage = req.query.mileage;
	num = req.query.num;
	if(!year || !cc || !countYear || !mileage || !num){
		res.send("NO answer" + "<br><a href='./input.html'>Come back to Data page</a>");
	}else{
		let options = {
	    mode: 'json',
	    pythonOptions: ['-u'],
	    scriptPath: './',
	    args: ['value1', 'value2', 'value3']
    
		};
		test =  new PythonShell('loadModel_predict_example.py', options);
		test.send({ command: "inputData", args: [year,cc,countYear,mileage,num]});
		test.on('message',function (message) {
			 msg = message;
			 a = msg;
			 res.send("The answer is "+a+"<br><a href='./input.html'>Come back to Data page</a>");
		});
	//console.log(msg[0]);
	}
	
   
});

app.listen(3000, function(){
	console.log("PythonShell Server start in port 3000")
	
});









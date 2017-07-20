/*
This file will look for bundle.js and delete it if it exists, 
this will help us identify if latest bundle.js is generated or not / having any issues
This will over rule any cache concerns as well
*/

var fs = require('fs');

try{
	console.log("clean.js : Cleaning in progress");
	var filePath = __dirname+"/public/bundle.js";
	fs.unlinkSync(filePath);
}
catch(err){
	console.log("clean.js : No bundle.js file found")
}
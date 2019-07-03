/* read a text files inside a Directory */

const fs = require("fs");
const path = require('path');

fs.readdir('./lib', function(err, files) {
	files.forEach(function(fileName) {
		let file = path.join(__dirname , "lib", fileName);
		let stats = fs.statSync(file);
		if (stats.isFile() && fileName !== "DS.Store")  {
			fs.readFile(file, "UTF-8", function(err, contents) {
				console.log(contents)
			})
		}
	});
});








/* This code read your file asynchronously , you can use readFileSync
 * to read file Synchronously 
*/
// var contents = fs.readFile("./lib/sayings.md","UTF-8", 
// 	function (err, contents) {
// 		if (err) {
// 			console.log(err)
// 		}
// 	console.log(contents);

// });


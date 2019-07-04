/* read a text files inside a Directory */
const fs = require("fs");
const path = require('path');

fs.readdir('lib/', function(err, files) {
	if(err) {
		console.log(err);
	} else {
		files.forEach(function(fileName) {
			let file = path.join("lib", fileName);
			let stats = fs.statSync(file);
			if (stats.isFile() && fileName !== "DS.Store")  {
				fs.readFile(file, "UTF-8", function(err, contents) {
					if(err) {
						console.log(err)
					}
					console.log(contents)
				})
			}
		});
	}
});



/* This code read your file asynchronously , you can use readFileSync
 * to read file Synchronously 
*/

// const content = fs.readFile("./lib/sayings.md","UTF-8", 
// 	function (err, contents) {
// 		if (err) {
// 			console.log(err)
// 		}
// 		console.log(contents);
// 	}
// );


// console.log(content)

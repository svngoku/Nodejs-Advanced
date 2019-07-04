var fs = require('fs');


/* readdir , show all inside the current folder */
fs.readdir('./lib', function(err, files) {
	if (err) {
		throw err;
	}
	console.log(files);

});


console.log("Reading files ... ");



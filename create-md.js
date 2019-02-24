<<<<<<< HEAD:create.js
// create a markedown file

var fs = require('fs');
var md  = `
=======
const fs = require('fs');
let md  = `
>>>>>>> f12bfea379fbc67afbee78b956e2c4df82dc9a7d:create-md.js
	Simple Titre Markdown 
	=====================


	Sous Titre
	----------

	* Point
	* Point
	* Point

`;

fs.writeFile("sample.md", md.trim() , function (err) {
	console.log('Fichier créer ! ');
})
<<<<<<< HEAD:create.js


=======
>>>>>>> f12bfea379fbc67afbee78b956e2c4df82dc9a7d:create-md.js

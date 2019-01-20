var fs = require('fs');
var md  = `
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

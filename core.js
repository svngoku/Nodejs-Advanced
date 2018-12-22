var path = require('path');
/* util module : donne accès à certaines informations utilitaire */
var util = require('util')
/* v8 module : donne accès à certaines information conernant la memoire */
var v8 = require('v8');


util.log(path.basename(__filename));

var dirUp = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUp);


util.log(v8.getHeapStatistics());

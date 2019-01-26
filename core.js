let path = require('path');
/* util module : donne accès à certaines informations utilitaire */
let util = require('util')
/* v8 module : donne accès à certaines information conernant la memoire */
let v8 = require('v8');


util.log(path.basename(__filename));

let dirUp = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUp);


util.log(v8.getHeapStatistics());

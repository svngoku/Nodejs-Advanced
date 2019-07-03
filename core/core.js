'use strict';

const path = require('path');
/* util module : donne accès à certaines informations utilitaire */
const util = require('util')
/* v8 module : donne accès à certaines informations conernant la memoire */
const v8 = require('v8');


util.log(path.basename(__filename));

let dirUp = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUp);


util.log(v8.getHeapStatistics());

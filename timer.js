var waitTime = 3000
var currentTime = 0
var waitInterval = 500
var percentWaited = 0

function writeWaintingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`En attente ⌛ ... ${p}%`);
}


var interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  writeWaintingPercent(percentWaited);
}, waitInterval);


setTimeout(function() {
  clearInterval(interval);
  writeWaintingPercent(100);
  console.log("\n \n Terminé ! 😊  \n \n");
}, waitTime);


process.stdout.write('\n \n');
writeWaintingPercent(percentWaited);


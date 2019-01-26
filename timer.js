let waitTime = 3000
let currentTime = 0
let waitInterval = 10 // 10 milliseconds 
let percentWaited = 0

	function writeWaintingPercent(p) {
	  process.stdout.clearLine();
	  process.stdout.cursorTo(0);
	  process.stdout.write(`En attente ⌛ ... ${p}%`);
	}


	let interval = setInterval(function() {
	  currentTime += waitInterval;
	  percentWaited = Math.floor((currentTime/waitTime) * 100);
	  writeWaintingPercent(percentWaited);
	}, waitInterval);


	setTimeout(function() {
	  clearInterval(interval);
	  writeWaintingPercent(100);
	  console.log("\n \n Terminé ! 😊  \n \n");
	}, waitTime);

	process.stdout.write('\n\n');

	writeWaintingPercent(percentWaited);


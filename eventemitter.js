const EventEmitter = require('events').EventEmitter; 
const event = new EventEmitter(); 

event.on('some_event', function() { 
	console.log('Evenement ... '); 
});

setTimeout(function() { 
	event.emit('some_event'); 
}, 1000); 

const EventEmitter = require('events');

// Create an instance of EventEmitter for the number requester
const numberRequester = new EventEmitter();

// Listen for 'randomNumber' events
numberRequester.on('randomNumber', (randomNumber) => {
    console.log(`Received random number: ${randomNumber}`);
});

// Request random numbers every 4 seconds
setInterval(() => {
    numberRequester.emit('requestNumber');
}, 4000); // Request numbers every 4 seconds

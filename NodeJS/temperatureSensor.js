// Import the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const temperatureSensor = new EventEmitter();

// Simulate temperature updates
setInterval(() => {
    const temperature = Math.floor(Math.random() * 100); // Random temperature between 0 and 100
    temperatureSensor.emit('temperatureUpdate', temperature);
}, 2000); // Emit updates every 2 seconds

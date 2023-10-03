// Import the 'events' module
const EventEmitter = require('events');

// Create instances of EventEmitter for temperature sensor and display
const temperatureSensor = new EventEmitter();
const temperatureDisplay = new EventEmitter();

// Listen for 'temperatureUpdate' events
temperatureSensor.on('temperatureUpdate', (temperature) => {
    console.log(`Temperature Update: ${temperature}°C`);
});

// Simulate temperature updates
setInterval(() => {
    const temperature = Math.floor(Math.random() * 100); // Random temperature between 0 and 100
    temperatureSensor.emit('temperatureUpdate', temperature);
}, 2000); // Emit updates every 2 seconds

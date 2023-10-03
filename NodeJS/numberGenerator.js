const EventEmitter = require('events');

// Create an instance of EventEmitter for the number generator
const numberGenerator = new EventEmitter();

// Function to generate and emit a random 5-digit number every 2 seconds
function generateRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 90000) + 10000; // Random 5-digit number
        numberGenerator.emit('randomNumber', randomNumber);
    }, 2000); // Emit numbers every 2 seconds
}
generateRandomNumber();
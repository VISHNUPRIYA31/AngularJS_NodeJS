var events = require('events');
var eventEmitter = new events.EventEmitter();

//Assign the event handler to an event:

eventEmitter.on('hungry-order-food', (item1) => {
    console.log(`Your food ${item1} has been ordered`)
});
eventEmitter.on('hungry-order-food', (item1,item2) => {
    if(item2 === 'mushroom Chilly')
    console.log(`Your food ${item1} and ${item2} has been ordered`);
    if(item2 === 'Gobi Chilly')
    console.log(`Your food ${item1} and ${item2} has been ordered and provide an offer of 10%`)
});

//Fire the 'hungry' event:
//eventEmitter.emit('hungry-order-food','Veg Fried Rice','Gobi Chilly');
eventEmitter.emit('hungry-order-food','Veg Fried Rice');
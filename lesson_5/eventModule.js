const EventsEmitter = require('events');

const emitter = new EventsEmitter();

// register an event listener for bellRing event
emitter.on('bellring', () => {
    console.log('chutti yayy!');
});

// raise/emit an event
// event will raise after 3 seconds
setTimeout(() => {
    emitter.emit('bellring');
}, 3000);

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log(`data received: ${data}`)
    console.log(secondData)
})

customEmitter.emit('response', 'Hello World', [1,2,3,4,5]) 
customEmitter.emit('response', 'juan') 
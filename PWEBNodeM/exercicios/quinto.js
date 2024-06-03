const eventos = require("events")

const emitter = new eventos.EventEmitter

emitter.on('dados', (fecha) => {
    console.log(fecha)
})

setInterval(() => {
    emitter.emit('dados', Date.now())
}, 500);
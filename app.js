var stuff = require('./stuff')

console.log(stuff.counter(['Shaun', 'Ryu', 'Yoshi']))
console.log(stuff.adder(5, 6))
console.log(stuff.adder(5, stuff.pi))

var events = require('events')

var myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', function(msg) {
  console.log(msg)
})

myEmitter.emit('someEvent', 'the event was emitted')

// 

class Person extends events {
    constructor(name) {
        super()
        this.name = name
    }
}

const shaun = new Person('Shaun')
const ryu = new Person('Ryu')
const yoshi = new Person('Yoshi')

const people = [shaun, ryu, yoshi]

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(person.name + ' said: ' + msg)
    })
})

shaun.emit('speak', 'hey dudes!')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

before((done) => {
  mongoose.connect('mongodb://localhost/tester');

  mongoose.connection.once('open', () => {
    console.log('Connection has been made, now make fireworks...')
    done()
  }).on('error', () => {
    console.log('Connection error: ', error)
  })
})

// beforeEach((done) => {
//   mongoose.connection.collection.ninjachars.drop(() => { done() })
// })
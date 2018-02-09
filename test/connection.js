const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tester');

mongoose.connection.once('open', () => {
  console.log('Connection has been made, now make fireworks...')
}).once('error', () => {
  console.log('Connection error: ', error)
})
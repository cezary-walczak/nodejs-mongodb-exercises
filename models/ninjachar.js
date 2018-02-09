const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NinjaCharSchema = new Schema({
  name: String,
  age: Number
})

const NinjaChar = mongoose.model('ninjachar', NinjaCharSchema)

module.exports = NinjaChar
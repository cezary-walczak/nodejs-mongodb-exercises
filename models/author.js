const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
  title: String,
  pages: Number
})

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BooksSchema]
})

const Author = mongoose.model('authors', AuthorSchema)

module.exports = Author
const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

describe('Nesting records', () => {
  beforeEach((done) => {
    mongoose.connection.collection.authors.drop(done)
  })

  it('create an author with sub-documents', (done) => {
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{ title: 'Name of the Wind', pages: 400 }]
    })
    pat.save().then(() => {
      Author.findOne({name: 'Patrick Rothfuss'}).then((record) => {
        assert(record.books.lenght === 1)
        done()
      })
    })
  })
  it('adds book to author', (done) => {
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{ title: 'Name of the Wind', pages: 400 }]
    })
    pat.save().then(() => {
      Author.findOne({name: 'Patrick Rothfuss'}).then((record) => {
        record.books.push({ title: 'Wise Man Fear', pages: 500 })
        record.save().then(() => {
          Author.findOne({name: 'Patrick Rothfuss'}).then((result) => {
            assert(record.books.lenght === 2)
            done()
          })
        })
      })
    })
  })
})
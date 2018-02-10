const assert = require('assert')
const NinjaChar = require('../models/ninjachar')

describe('finding records', () => {

  var char;
  beforeEach((done) => {
    char = new NinjaChar({
      name: 'Shaun'
    });
    char.save().then(() => {
      done();
    });
  });

  it('find one record from database', (done) => {
    NinjaChar.findOne({ name: 'Shaun' }).then((result) => {
      assert(result.name === 'Shaun')
      done()
    })
  })

  it('find one record by ID from database', (done) => {
    NinjaChar.findOne({ _id: char._id }).then((result) => {
      assert(result._id.toString() === char._id.toString())
      done()
    })
  })

})
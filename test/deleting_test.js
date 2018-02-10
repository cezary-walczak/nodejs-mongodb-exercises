const assert = require('assert')
const NinjaChar = require('../models/ninjachar')

describe('deleting records', () => {

  var char;
  beforeEach((done) => {
    char = new NinjaChar({
      name: 'Shaun'
    });
    char.save().then(() => {
      done();
    });
  });

  it('deletes one record from database', (done) => {
    NinjaChar.findOneAndRemove({ name: 'Shaun' }).then(() => {
      NinjaChar.findOne({ name: 'Shaun' }).then((result) => {
        assert(result === null)
        done()
      })
    })
  })

})
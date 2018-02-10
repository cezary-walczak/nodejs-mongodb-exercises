const assert = require('assert')
const NinjaChar = require('../models/ninjachar')

describe('updating records', () => {

  var char;
  beforeEach((done) => {
    char = new NinjaChar({
      name: 'Shaun'
    });
    char.save().then(() => {
      done();
    });
  });

  it('updating one record in database', (done) => {
    NinjaChar.findOneAndUpdate({ name: 'Shaun' }, { name: 'Yoshi' }).then(() => {
      NinjaChar.findOne({ name: char._id }).then((result) => {
        assert(result.name === 'Yoshi')
        done()
      })
    })
  })

})
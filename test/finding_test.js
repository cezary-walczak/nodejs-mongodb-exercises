const assert = require('assert')
const NinjaChar = require('../models/ninjachar')

describe('finding records', () => {

  it('find one record from database', (done) => {
    NinjaChar.findOne({ name: 'Shaun' }).then((result) => {
      assert(result.name === 'Shaun')
      done()
    })
  })

})
const assert = require('assert')
const NinjaChar = require('../models/ninjachar')

describe('saving records', () => {

  it('saves records to database', (done) => {
    var char = new NinjaChar({
      name: 'Shaun'
    })
    char.save().then(() => {
      assert(char.isNew === false)
      done()
    })
  })

})
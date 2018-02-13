
const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

router.get('/api/ninjas', (req, res, next) => {
  // Ninja.find({}).then((ninja) => { // find({}) returns all ninjas
  //   send(ninja)
  // })
  Ninja.aggregate().near({
    near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    maxDistance: 100000,
    spherical: true,
    distanceField: 'dist.calculated'
  }).then(function (ninjas) {
    res.send(ninjas)
  }).catch(next)
})

router.post('/api/ninjas', (req, res, next) => {
  // var ninja = new Ninja(req.body)
  // ninja.save()
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja)
  }).catch(next)
})

router.put('/api/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Ninja.findOne({_id: req.params.id}).then((ninja) => {
      res.send(ninja)
    })
  })
})

router.delete('/api/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
    res.send(ninja)
  })
})

module.exports = router
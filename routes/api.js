
const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

router.get('/api/ninjas', (req, res, next) => {
  res.send({type: 'GET'})
})

router.post('/api/ninjas', (req, res, next) => {
  // var ninja = new Ninja(req.body)
  // ninja.save()
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja)
  }).catch(next)
})

router.put('/api/ninjas/:id', (req, res, next) => {
  res.send({type: 'PUT'})
})

router.delete('/api/ninjas/:id', (req, res, next) => {
  Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
    res.send(ninja)
  })
})

module.exports = router
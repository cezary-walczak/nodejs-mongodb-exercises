
const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

router.get('/api/ninjas', (req, res) => {
  res.send({type: 'GET'})
})

router.post('/api/ninjas', (req, res) => {
  // var ninja = new Ninja(req.body)
  // ninja.save()
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja)
  })
})

router.put('/api/ninjas/:id', (req, res) => {
  res.send({type: 'PUT'})
})

router.delete('/api/ninjas/:id', (req, res) => {
  res.send({type: 'DELETE'})
})

module.exports = router
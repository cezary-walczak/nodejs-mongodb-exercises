
const express = require('express')
const router = express.Router()

router.get('/api/ninjas', function(req, res){
    res.send({type: 'GET'})
})

router.post('/api/ninjas', function(req, res){
    console.log(req.body)
    res.send({
      type: 'POST',
      name: req.body.name,
      rank: req.body.rank
    })
})

router.put('/api/ninjas/:id', function(req, res){
    res.send({type: 'PUT'})
})

router.delete('/api/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'})
})

module.exports = router
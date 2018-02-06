var express = require('express')

var app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/contact', (req, res) => {
  res.send('this is the contact page')
})
app.get('/profile/:id', (req, res) => {
  var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] }
  res.render('profile', { person: req.params.id, data: data })
})


app.listen(3000)
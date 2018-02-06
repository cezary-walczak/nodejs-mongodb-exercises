var express = require('express')
var stylus = require('stylus')

var app = express()

app.set('view engine', 'pug')

app.use('/assets', express.static('assets')).use(stylus.middleware({ // map routes to folder
  src: __dirname + '/',
  dest: __dirname + '/'
}))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/profile/:id', (req, res) => {
  var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] }
  res.render('profile', { person: req.params.id, data: data })
})

app.listen(3000)
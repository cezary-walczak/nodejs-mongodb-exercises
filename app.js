var express = require('express')
var stylus = require('stylus')
var bodyParser = require('body-parser')

var todoController = require('./controllers/todoController')
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.use('/assets', express.static('assets')).use(stylus.middleware({ // map routes to folder
  src: __dirname + '/',
  dest: __dirname + '/'
}))

todoController(app)

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/contact', (req, res) => {
  console.log(req.query)
  res.render('contact', { qs: req.query })
})
app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body)
  res.render('contact-success', { data: req.body })
})
app.get('/profile/:id', (req, res) => {
  var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] }
  res.render('profile', { person: req.params.id, data: data })
})

app.listen(3000)
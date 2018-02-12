const express = require('express')
const stylus = require('stylus')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()

app.set('view engine', 'pug')
app.use('/assets', express.static('assets')).use(stylus.middleware({ // map routes to folder
  src: __dirname + '/',
  dest: __dirname + '/'
}))

app.get('/api', (req, res) => {
  console.log('GET request')
  res.send({ name: 'Yoshi' })
})

app.listen(process.env.port || 4000, () => {
  console.log('Now listening for requests')
})
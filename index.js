const express = require('express')
const stylus = require('stylus')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const routes = require('./routes/api')
const app = express()

app.set('view engine', 'pug')
app.use('/assets', express.static('assets')).use(stylus.middleware({ // map routes to folder
  src: __dirname + '/',
  dest: __dirname + '/'
}))
app.use(bodyParser.json())
app.use(routes) // use uses middleware

app.listen(process.env.port || 4000, () => {
  console.log('now listening for requests')
})
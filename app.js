var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.on('data', (chunk) => {
  console.log('new chunk received:')
  myWriteStream.write(chunk)
})

/*
var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hey ninjas!')
})

server.listen(3000, '127.0.0.1')
console.log('yo dawgs, now listening to port 3000')
*/
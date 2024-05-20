const http = require('http')

const server = http.createServer((req, res) => {
    res.end("<html><body>Site da fatec sorocaba</body><html>")
})

server.listen(3000)
const http = require('http')
const app = require('./app')
const { PORT } = require('../configuration/config')

const server = http.createServer(app)
server.listen(PORT)
console.log(`🚀  server is listening on port ${PORT}`)


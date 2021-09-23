const dotenv = require('dotenv')

let envPath = `configuration/.env.${process.env.NODE_ENV}`
dotenv.config({ path: envPath })

console.log(`Running mode: ${process.env.NODE_ENV}`)

module.exports = {
  PORT: process.env.PORT
}

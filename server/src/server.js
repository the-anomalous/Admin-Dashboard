require('dotenv').config()
const http = require('http')

const app = require('./app')
const {connectMongoDB} = require('./services/mongoDB')

const server = http.createServer(app)
const PORT = process.env.PORT || 5000

const startServer = async () => {
  await connectMongoDB()

  server.listen(PORT, () => console.log(`Server running on ${PORT}...`))
}

startServer()

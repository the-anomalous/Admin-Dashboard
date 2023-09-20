require('dotenv').config()
import http from "http";
import app from "./app";

import { connectMongoDB } from "./services/mongoDB";

const server = http.createServer(app)
const PORT = process.env.PORT || 5000

const startServer = async () => {
  await connectMongoDB()

  server.listen(PORT, () => console.log(`Server running on ${PORT}...`))
}

startServer()

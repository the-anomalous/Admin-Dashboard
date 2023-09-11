const express = require("express");
const bodyParser = require("body-parser");
const cors =  require("cors") 
const helmet = require("helmet");
const morgan = require("morgan");

const app = express()

// Middlewares
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
  policy: 'cross-origin'
}))
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors())

module.exports = app

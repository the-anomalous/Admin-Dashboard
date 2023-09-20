import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

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

export default app

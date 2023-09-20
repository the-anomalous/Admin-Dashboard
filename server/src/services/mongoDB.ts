import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL

// onConnect events
mongoose.connection.once('open', () => console.log('MongoDB connected'))
mongoose.connection.on('error', (err) => console.log(err))

export const connectMongoDB = async () => {
  await mongoose.connect(MONGO_URL)
}

export const disconnectMongoDB = async () => {
  await mongoose.disconnect()
} 

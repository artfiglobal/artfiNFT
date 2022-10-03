import mongoose from 'mongoose'

const MONGO_URI = "mongodb+srv://Janmejay:123@artfi.199w0.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
  try {
      const conn = await mongoose.connect(MONGO_URI)
      console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB


import mongoose from 'mongoose'

const connectDB = async (databaseURL: string) => {
  try {
    const conn = await mongoose.connect(databaseURL)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB


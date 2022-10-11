import mongoose from 'mongoose'

const connectDB = async (databaseURL) => {
  try {
    const DB_OPTIONS = {
      dbName:'ArtiFi'
    }
      const conn = await mongoose.connect(databaseURL , DB_OPTIONS)
      console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB


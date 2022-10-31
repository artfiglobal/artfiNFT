import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "";

    if(mongoURI.length > 0) {
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } else {
      console.log("Not set mongodb connect");
      process.exit(1)
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB

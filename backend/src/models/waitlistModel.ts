import mongoose from 'mongoose';

const waitlistSchema = new mongoose.Schema({
  
    email: {
      type: String,
      unique: true,
      required: true,
    },
    referralCode: {
      type: String,
      unique: true,
      required: true,
    },
    subscription: {
      type: Boolean,
    }
});

const waitlistModel = mongoose.model('waitlist' , waitlistSchema)
export default waitlistModel

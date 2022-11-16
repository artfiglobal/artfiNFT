import asyncHandler from "express-async-handler";
import { sendMailUsingSendGrid } from "../utils/sendEmail";
import { getReferCode } from '../utils'
import dotenv from "dotenv";
import waitlistModel from "../models/waitlistModel";

dotenv.config();

export const sendMailToUser = asyncHandler(async (req, res) => {
  try {
    const { email, referral, subscription } = req.body;

    if (!email) {
      res.status(400).json({
        message: "Email is required",
      });
    }

    const existingEmail = await waitlistModel.findOne({ email })
    if(existingEmail && existingEmail.email != "") {
      res.status(500).json({ message: "You email was already registed"});
    } else {
      const referCode = referral && referral.length > 0 ? referral : getReferCode();
      const res2 = await sendMailUsingSendGrid({
        to: email,
        from: process.env.WAITLIST_SENDER,
        subject: "Thank you for joining the waitlist for Artfi NFT offerings!",
        template: "waitlist",
        templateVars: {
          referCode,
        },
      });

      const createWaitlist = new waitlistModel(
      {
          email: email,
          referralCode: referCode,
          subsciption: subscription,
      });
      await createWaitlist.save();

      res.status(200).json({ message: "Mail Sent", res: res2 });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

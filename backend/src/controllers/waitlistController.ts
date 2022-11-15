import asyncHandler from "express-async-handler";
import { sendMailUsingSendGrid } from "../utils/sendEmail";
import { getReferCode } from '../utils'
import dotenv from "dotenv";

dotenv.config();

export const sendMailToUser = asyncHandler(async (req, res) => {
  try {
    // console.log("Testing this side");
    const { email, referralCode } = req.body;
    const referCode = referralCode && referralCode.length > 0 ? referralCode : getReferCode();
    if (!email) {
      res.status(400).json({
        message: "Email is required",
      });
    }
    
    const res2 = await sendMailUsingSendGrid({
      to: email,
      from: process.env.WAITLIST_SENDER,
      subject: "Thank you for joining the waitlist for Artfi NFT offerings!",
      template: "waitlist",
      templateVars: {
        referCode,
      },
    });
    return res.status(200).json({ message: "Mail Sent", res: res2 });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});

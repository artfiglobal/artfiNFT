import asyncHandler from "express-async-handler";

import { sendMail } from "../utils/sendEmail";
import WhiteList, { WhitelistInterface } from "../models/whitelistModel";
import NFT from "../models/nftModel";
import dotenv from "dotenv";

dotenv.config();
// @desc    Add a Wallet to WhiteList
// @route   POST /api/whitelist
// @access  Public

export const addToWhiteList = asyncHandler(async (req, res) => {
  try {
    console.log("Hello this got called");
    if (!req.body) {
      res.status(400);
      throw new Error("Incomplete Data");
    }

    let responseObject = {};
    await WhiteList.create({
      ...req.body,
      wallet: req.body?.address,
    }).then((res) => {
      console.log(res);
      responseObject = {
        ...res,
      };
    });

    const query = { name: "ART One" };
    const update = { $set: { name: "ART One", amount: 1 } };
    const options = { upsert: true };

    NFT.updateOne(query, update, options);

    await sendMail({
      to: req.body.email,
      from: process.env.SENDER_EMAIL,
      subject: "Thank you for joining the Whitelist for Artfi NFT offerings!",
      template: "template",
      templateVars: {
        referralCode: 1,
      },
    })
      .then(() => {
        console.log("Sent Mail");
      })
      .catch((err) => {
        console.log(err);
      });

    res.status(200).json(responseObject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});
// @desc    GET Whitelist
// @route   GET /api/whitelist
// @access  Private

export const sendMailToUser = asyncHandler(async (req, res) => {
  try {
    // console.log("Testing this side");
    const { email } = req.body;
    if (!email) {
      res.status(400).json({
        message: "Email is required",
      });
    }

    const res2 = await sendMail({
      to: req.body.email,
      from: process.env.SENDER_EMAIL,
      subject: "Thank you for joining the Whitelist for Artfi NFT offerings!",
      template: "template",
      templateVars: {
        referralCode: 1,
      },
    });
    res.status(200).json({ message: "Mail Sent" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

export const getWhiteList = asyncHandler(async (_req, res) => {
  console.log("This is the whitelist controller");
  const data = await WhiteList.find();
  res.status(200).json(data);
});

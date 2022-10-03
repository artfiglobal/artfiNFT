import { Schema, model } from "mongoose";

export type WhitelistInterface = {
  email: string;
  wallet: string;
  termsSignature: string;
  amount: number;
};

const whitelistSchema = new Schema<WhitelistInterface>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    wallet: {
      type: String,
      unique: true,
      required: true,
    },
    termsSignature: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Whitelist", whitelistSchema);

import { Schema, model } from "mongoose";

export type NFTInterface = {
  amount: number;
};

const NFTSchema = new Schema<NFTInterface>(
  {
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("NFT", NFTSchema);

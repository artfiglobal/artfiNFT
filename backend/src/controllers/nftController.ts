
import asyncHandler from 'express-async-handler'

import NFT from "../models/nftModel"

// @desc    GET NFT 
// @route   GET /api/nft
// @access  Public
export const getNFTCount = asyncHandler(async (_req, res) => {
  const data = await NFT.find();
  res.status(200).json(data)
})


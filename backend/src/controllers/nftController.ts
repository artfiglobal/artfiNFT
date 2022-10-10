
import asyncHandler from 'express-async-handler'

import NFT from "../models/nftModel"

// @desc    GET NFT 
// @route   GET /api/nft
// @access  Public
export const getNFTCount = asyncHandler(async (_req, res) => {
  const data = await NFT.find();
  res.status(200).json(data)
})

export const postNFT = asyncHandler(async  (req, res) => {

  if (!req.body) {
    res.status(400);
    throw new Error("Incomplete Data");
  }
  const reqHeader = {
    "x-client-secret": process.env.PROJECT_ID,
    "x-project-id":process.env.CLIENT_SECRET,
    "Content-Type":'application/json'
  };
  const collectionName = 'NFT';
  const recipient = "poly:0x12618f45ff6e841470bf71f428aae41ee5bc3c39"//for test 
  const reqBody = JSON.stringify({
    "mainnet": false,
    "metadata": {
      "name": req.body.name,
      "image": req.body.image,
      "description": req.body.description
    },
    "recipient": recipient
  });
  const crossmintURL = `https://www.crossmint.io/api/2022-06-09/collections/${collectionName}/nfts` ;
  try{
  const result = await axios.post(crossmintURL,{
    headers: reqHeader,
    body: reqBody
  })
  if(result){
      // console.log(result)
      // const post = new NFT({
      //   // Name: result.name,
      //   // Image: result.image,
      //   // Description: result.desciption
      // })
      // post.save();
      res.send(result)
    }
  }catch(error:any){
      console.log(error);
      res.send(error.message);
    }
})


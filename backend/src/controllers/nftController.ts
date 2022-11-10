import axios from 'axios'
import asyncHandler from 'express-async-handler'
import { ethers } from 'ethers';
import NFT from "../models/nftModel"
import * as utils from "../utils";
import abi from '../abi/abi.json';
import { AbiItem } from 'web3-utils';

// @desc    GET NFT 
// @route   GET /api/nft
// @access  Public
export const getNFTCount = asyncHandler(async (_req, res) => {
  const data = await NFT.find();
  res.status(200).json(data)
})

export const postNFT = asyncHandler(async (req, res) => {

  if (!req.body) {
    res.status(400);
    throw new Error("Incomplete Data");
  }
  const collection = 'NFT';
  var baseUrl = process.env.CROSSMINT_INTEGRATIONURL;
  const mintApiPath = `/${collection}/nfts`;
  const mintUrl = `${baseUrl}${mintApiPath}`;

  const reqHeader = {
    "x-client-secret": process.env.PROJECT_ID,
    "x-project-id": process.env.CLIENT_SECRET,
    "Content-Type": 'application/json'
  };
  const recipient = `email:${req.body.email}:poly`;
  const reqBody = JSON.stringify({
    "mainnet": false,
    "metadata": {
      "name": req.body.name,
      "image": req.body.image,
      "description": req.body.description
    },
    "recipient": recipient
  });
  try {
    const result = await axios.post(mintUrl, {
      headers: reqHeader,
      body: reqBody
    })
    if (result) {
      // const post = new NFT({
      //   Name: result.name,
      //   Image: result.image,
      //   Description: result.desciption
      // })
      // post.save();  
      res.send(result)
    }
  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
})

export const mintNFT = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Incomplete Data");
  }
  const web3 = utils.getWeb3();
  const pubkey = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY as string);
  const provider = utils.getProvider();
  const nonce = await provider.getTransactionCount(pubkey.address, 'latest');
  const gasPrice = await provider.getGasPrice();

  const contractABI = new ethers.utils.Interface(abi);
  const transaction = {
    to: req.body.minter,
    nonce: nonce,
    gas: 30000,
    gasPrice: ethers.utils.hexlify(gasPrice),
    value: ethers.utils.hexlify(0),
    data: contractABI.encodeFunctionData("mintNFT", [
      req.body.minter.toString(),
      req.body.metaURI.toString()
    ]),
    chainId: +(process.env.CHAIN_ID as string)
  };

  const signedTx = await web3.eth.accounts.signTransaction(transaction, process.env.PRIVATE_KEY as string);

  try {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction as string, function(error, hash) {
      if (!error) {
        res.send(hash);
      } else {
        res.send(error);
      }
    });

  } catch (error: any) {
    console.log(error);
    res.send(error.message);
  }
})

export const crossmintWebHook = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Incomplete Data");
  }

  // Get parameters when send the custom parameters when pay on frontend
  const { whPassThroughArgs } = req.body;
  
  if (whPassThroughArgs) {
    const whArgsDeserialized = JSON.parse(whPassThroughArgs);
    console.log(whArgsDeserialized);
  }

  let crossmintResponse = req.body;
  let status = crossmintResponse.status;
  if(status == "success") {
    res.send();
  } else {
    res.send("There is error")
  }
});
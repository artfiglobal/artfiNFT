import { Router } from "express";
import {  postNFT,getNFTCount, mintNFT, crossmintWebHook } from "../controllers/nftController";

const router = Router();

router.route("/").get(getNFTCount);
router.post("/savenft", postNFT);
router.post("/mintnft", mintNFT);
router.post("/crossmintwebhook", crossmintWebHook);

export default router;

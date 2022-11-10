import { Router } from "express";
import {  postNFT,getNFTCount, mintNFT } from "../controllers/nftController";

const router = Router();

router.route("/").get(getNFTCount);
router.post("/savenft", postNFT);
router.post("/mintnft", mintNFT);

export default router;

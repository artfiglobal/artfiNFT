import { Router } from "express";
import {  postNFT,getNFTCount } from "../controllers/nftController";

const router = Router();

router.route("/").get(getNFTCount);
router.post("/savenft", postNFT);

export default router;

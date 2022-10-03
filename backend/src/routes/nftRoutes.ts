import { Router } from "express";
import { getNFTCount } from "../controllers/nftController";

const router = Router();

router.route("/").get(getNFTCount);

export default router;

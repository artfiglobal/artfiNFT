import { Router } from "express";
import {
  getWhiteList,
  addToWhiteList,
  sendMailToUser,
} from "../controllers/whitelistController";

const router = Router();
router.route("/").get(getWhiteList);
router.route("/").post(addToWhiteList);
router.route("/send-mail").post(sendMailToUser);

export default router;

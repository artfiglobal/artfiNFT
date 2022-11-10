import { Router } from "express";
import {
  sendMailToUser,
} from "../controllers/waitlistController";

const router = Router();
router.route("/send-mail").post(sendMailToUser);

export default router;

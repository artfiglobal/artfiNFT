import express from "express";
import loginController from "../controllers/loginController";

var router = express.Router();

router.get('/', loginController)

export default router;
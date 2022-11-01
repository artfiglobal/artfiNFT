import express from "express";
import loginController from "../controller/loginController";

var router = express.Router();

router.get('/', loginController)

export default router;
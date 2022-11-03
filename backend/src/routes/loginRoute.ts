import express from "express";
import {createUser, loginUser} from "../controllers/loginController";

var router = express.Router();

router.get('/login/:email', loginUser)
router.post('/signup', createUser)

export default router;
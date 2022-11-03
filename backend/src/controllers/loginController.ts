import express, { Request, Response } from "express";
import { User } from "../entity/userEntity";
import * as dotenv from 'dotenv'
dotenv.config()
import { EntityManager, FindManyOptions, getManager, getRepository } from 'typeorm';
import myDataSource from "../config/db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();


export async function loginUser(req: Request, res: Response) {
    try {
        const userRepository = myDataSource.getRepository(User);
        const { email } = req.params;
        const user = await User.findOneBy({
            email: email
        })
        if (!user) {
            return res.json({ message: "User not found" })
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function createUser(this: any, req: Request, res: Response) {

    //existing User check
    //hashed password
    //user creation
    //token generate
    let user = new User();
    user = { ...req.body };
    try {
        const userRepository = myDataSource.getRepository('user');
        const existingUser = await User.findOneBy({ email: req.params.email })

        if (existingUser) {
            return res.json({ message: "This User is already exist!" })
        }
        const hashPass = await bcrypt.hash(user.password, 10)

        await userRepository.save(user);

        const token = jwt.sign({ email: user.email, userId: user.userId }, process.env.JWTSECRET_KEY as any);
        res.status(201).json({ user: user, token: token })
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}
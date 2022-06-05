import { User } from "../models/User.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {

    // const { email } = req.user

    try {
        //   if (email === "dosorioadmin@gmail.com") {

        const user = await User.find()
        return res.status(200).json(user)

        //   } else {
        //     res.send("You don't have any ADMIN privileges");
        //   }
    } catch (error) {
        return next(error)
    }
});

export { userRoutes }
import express from "express";
import { isAuth } from "../authentication/jwt.js";
import { Profile } from "../models/Profiles.js";


const profileRoutes = express.Router()

//get all profiles
profileRoutes.get('/', async (req, res) => {
    try {
        const allUsers = await Profile.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        return next(error)
    }
});

//post a profile

profileRoutes.post('/create', async (req, res, next) => {
    try {

        const newProfile = new Profile({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            headline: req.body.headline,
            work: req.body.work,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            habilities: req.body.habilities,
        });

        const createdProfile = await newProfile.save();
        return res.status(201).json(createdProfile);

    } catch (error) {
        next(error);
    }
});


export { profileRoutes }
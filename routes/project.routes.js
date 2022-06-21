import express from "express";
import { isAuth } from "../authentication/jwt.js";
import { Project } from "../models/Project.js";

const projectRoutes = express.Router();

projectRoutes.get('/', [isAuth], async (req, res, next) => {

    const { email } = req.authority

    try {
        const user = await Project.find( {email : email} )
        return res.status(200).json(user)

    } catch (error) {
        return next(error)
        
    }


});

//post project
projectRoutes.post('/', [isAuth], async (req, res, next) => {

    const { body } = req
    //sacar el email
    const { email } = req.authority


    try {

        const newProject = new Project({
            email: email,
            projectName: body.projectName,
            imageLink: body.imageLink,
            description: body.description
        })

        const savedProject = await newProject.save()

        return res.json({
            status: 201,
            message: 'Registered successfully',
            data: { id: savedProject._id }
        });

    } catch (error) {
        return next(error)
    }

})

export { projectRoutes }

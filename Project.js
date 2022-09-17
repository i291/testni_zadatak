import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProject =async(req,res)=>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Project.findAll({
                attributes:['uuid','name','price','reqForMoney'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Project.findAll({
                attributes:['uuid','name','price','reqForMoney'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }


}
export const getAllProject=async(req,res)=>{
    try {
        const response = await Project.findAll({
            attributes:['uuid','name','price','reqForMoney']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

}
export const getProjectById =async(req,res)=>{
    try {
        const project = await Project.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!project) return res.status(404).json({msg: "podaci nisu pronađeni"});
        let response;
        if(req.role === "admin"){
            response = await Project.findOne({
                attributes:['uuid','name','price','reqForMoney'],
                where:{
                    id: project.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Project.findOne({
                attributes:['uuid','name','price','reqForMoney'],
                where:{
                    [Op.and]:[{id: project.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}
export const createProject =async(req,res)=>{
    const {name, price,reqForMoney} = req.body;
    try {
        await Project.create({
            name: name,
            price: price,
            reqForMoney:reqForMoney,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}
export const updateProject =async(req,res)=>{
    try {
        const project = await Project.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!project) return res.status(404).json({msg: "podaci nisu pronadeni"});
        const {reqForMoney} = req.body;
        if(req.role === "admin"){
            await Project.update({reqForMoney},{
                where:{
                    id: project.id
                }
            });
        }else{
            if(req.userId !== project.userId) return res.status(403).json({msg: "zabranjen pristup"});
            await Project.update({name, price},{
                where:{
                    [Op.and]:[{id: project.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }

    
}


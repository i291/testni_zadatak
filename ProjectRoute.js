import  express  from "express";
import {
    getProject,
    getAllProject,
    getProjectById,
    createProject,
    updateProject
} from "../controllers/Project.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router=express.Router();
router.get('/projects',verifyUser,getProject);
router.get('/projects/all',verifyUser,getAllProject);
router.get('/projects/:id',verifyUser,getProjectById);
router.post('/projects/add',verifyUser,createProject);
router.patch('/projects/:id',verifyUser,updateProject);


export default router;
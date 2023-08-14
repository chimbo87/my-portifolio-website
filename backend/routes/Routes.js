import express from "express";
import { myProjects , getProjects} from "../controllers/Controllers.js";
const router = express.Router();

router.post('/projects',myProjects)
router.get('/projects',getProjects)
export default router;

import express from "express";
import {
  myProjects,
  getProjects,
  myBlogs,
  getBlogs,
  myFeedbacks,
  getFeedbacks,
  Likes
} from "../controllers/Controllers.js";
const router = express.Router();

//projects routes
router.post("/projects", myProjects);
router.get("/projects", getProjects);

//blogs routes
router.post("/blogs", myBlogs);
router.get("/blogs", getBlogs);
router.put('/blogs/likes',Likes)

//feedbacks routes
router.post("/feedback", myFeedbacks);
router.get("/feedback", getFeedbacks);
export default router;

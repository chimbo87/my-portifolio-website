import express from "express";
import {
  myProjects,
  getProjects,
  myBlogs,
  getBlogs,
  myFeedbacks,
  getFeedbacks,
  deleteFeedbacks,
  updateProjects,
  deleteProjects,
  deleteBlogs,
  Likes
} from "../controllers/Controllers.js";
const router = express.Router();

//projects routes
router.post("/projects", myProjects);
router.get("/projects", getProjects);
router.put(`/projects:id`, updateProjects);
router.delete('/projects:id',deleteProjects);

//blogs routes
router.post("/blogs", myBlogs);
router.get("/blogs", getBlogs);;
router.delete('/blogs:id',deleteBlogs);
router.put('/likes/:id',Likes)

//feedbacks routes
router.post("/feedback", myFeedbacks);//send emails
router.get("/feedback", getFeedbacks);//get user all emails
router.delete('/feedback:id',deleteFeedbacks);// delete email
export default router;

import express from "express";
import {
  myProjects,
  getProjects,
  myBlogs,
  getBlogs,
  myFeedbacks,
  getFeedbacks,
  deleteFeedbacks,
  updateProject,
  deleteProjects,
  deleteBlogs,
  Likes,
  getBlog,
  updateBlog,
  getProject,
  projectLikes,
  myComments,
  blogComments,
  getCommentsForBlog,
  projectComments,
  getCommentsForProject
} from "../controllers/Controllers.js";
const router = express.Router();

//projects routes
router.post("/projects", myProjects);
router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.put(`/projects/:id`, updateProject);
router.delete("/projects:id", deleteProjects);
router.post("/projects/projectslikes:id", projectLikes);
router.post("/projects/comments:id", projectComments);
router.get("/projects/comments/:id",getCommentsForProject);

//blogs routes
router.post("/blogs", myBlogs);
router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlog);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs:id", deleteBlogs);
router.post("/blogs/likes:id", Likes);
router.post("/blogs/comments:id", blogComments);
router.get("/blogs/comments/:id",getCommentsForBlog);

//feedbacks routes
router.post("/feedback", myFeedbacks); //send emails
router.get("/feedback", getFeedbacks); //get user all emails
router.delete("/feedback:id", deleteFeedbacks); // delete email

//comments routes
router.post("/comments",myComments);//send comments
export default router;

import express from "express";
import multer from "multer";
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
  getCommentsForProject,
} from "../controllers/Controllers.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Store uploaded files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Append timestamp to the file name
  },
});

const upload = multer({ storage });

// Create a new blog post with image

const router = express.Router();

//projects routes
router.post("/projects", upload.single("image"), myProjects);
router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.put(`/projects/:id`, updateProject);
router.delete("/projects:id", deleteProjects);
router.post("/projects/projectslikes:id", projectLikes);
router.post("/projects/comments:id", projectComments);
router.get("/projects/comments/:id", getCommentsForProject);

//blogs routes
router.post("/blogs", upload.single("image"), myBlogs);
router.get("/blogs", getBlogs);
router.get("/blogs/:id", getBlog);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs:id", deleteBlogs);
router.post("/blogs/likes:id", Likes);
router.post("/blogs/comments:id", blogComments);
router.get("/blogs/comments/:id", getCommentsForBlog);

//feedbacks routes
router.post("/feedback", myFeedbacks); //send emails
router.get("/feedback", getFeedbacks); //get user all emails
router.delete("/feedback:id", deleteFeedbacks); // delete email

//comments routes
router.post("/comments", myComments); //send comments
export default router;

import asyncHandler from "express-async-handler";
import project from "../models/projectModel.js";
import blogs from "../models/blogsModel.js";
import feedback from "../models/feedBackModel.js";

const myProjects = asyncHandler(async (req, res) => {
  try {
    const { name, title,githubLink,
      siteLink, description, image } = req.body;
    const Project = await project.create({
      name,
      title,
      githubLink,
      siteLink,
      description,
      image,
    });
    res.status(200).json(Project);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const getProjects = asyncHandler(async (req, res) => {
  try {
    const Projects = await project.find({});
    res.status(200).json(Projects);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const myBlogs = asyncHandler(async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const Blogs = await blogs.create({
      title,
      description,
      image,
    });
    res.status(200).json(Blogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const Likes = asyncHandler(async (req, res) => {
  try {
    const like = await blogs.findById(req.params.blogsId);
    like.likes += 1;
    await like.save();
    res.json(like);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getBlogs = asyncHandler(async (req, res) => {
  try {
    const Blogs = await blogs.find({});
    res.status(200).json(Blogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const myFeedbacks = asyncHandler(async (req, res) => {
  try {
    const { name, number, email, message } = req.body;
    const Feedback = await feedback.create({
      name,
      number,
      email,
      message,
    });
    res.status(200).json(Feedback);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const getFeedbacks = asyncHandler(async (req, res) => {
  try {
    const Feedbacks = await feedback.find({});
    res.status(200).json(Feedbacks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
export {
  myProjects,
  getProjects,
  myBlogs,
  getBlogs,
  myFeedbacks,
  getFeedbacks,
  Likes
};

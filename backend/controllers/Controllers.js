import asyncHandler from "express-async-handler";
import project from "../models/projectModel.js";
import blogs from "../models/blogsModel.js";
import feedback from "../models/feedBackModel.js";

const myProjects = asyncHandler(async (req, res) => {
  try {
    const { name, title, githubLink, siteLink, description, image } = req.body;
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

const updateProjects = asyncHandler(async (req, res) => {
  const { name, title, githubLink, siteLink, description, image } = req.body;
  try {
    const updatedProject = await project.findByIdAndUpdate(
      req.params.id,
      { name },
      { title },
      { githubLink },
      { siteLink },
      { description },
      { image }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "project not found" });
    }

    res
      .status(200)
      .json({
        message: "project updated successfully",
        project: updatedProject,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const deleteProjects = asyncHandler(async (req, res) => {
  try {
    const Project = await project.findByIdAndDelete(req.params.id);

    if (!Project) {
      return res.status(404).json({ error: "projecte not found" });
    }
    res.status(200).json({ message: "project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server" });
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
    const blogId = req.params.id;

    const Blog = await blogs.findById(blogId);

    if (!Blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    Blog.likes += 1;
    await Blog.save();

    return res
      .status(200)
      .json({ message: "Blog liked successfully", likes: blogs.likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
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

const deleteBlogs = asyncHandler(async (req, res) => {
  try {
    const Blog = await blogs.findByIdAndDelete(req.params.id);

    if (!Blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server" });
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

const deleteFeedbacks = asyncHandler(async (req, res) => {
  try {
    const email = await feedback.findByIdAndDelete(req.params.id);

    if (!email) {
      return res.status(404).json({ error: "email not found" });
    }
    res.status(200).json({ message: "email deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server" });
  }
});

export {
  myProjects,
  getProjects,
  myBlogs,
  getBlogs,
  myFeedbacks,
  getFeedbacks,
  deleteFeedbacks,
  Likes,
  updateProjects,
  deleteProjects,
  deleteBlogs,
};

import asyncHandler from "express-async-handler";
import project from "../models/projectModel.js";
import blogs from "../models/blogsModel.js";
import feedback from "../models/feedBackModel.js";
import comment from "../models/commentModel.js";

// const myProjects = asyncHandler(async (req, res) => {
//   try {
//     const { name, title, githubLink, siteLink, description, image } = req.body;
//     const Project = await project.create({
//       name,
//       title,
//       githubLink,
//       siteLink,
//       description,
//       image,
//     });
//     res.status(200).json(Project);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
// });
const  myProjects = asyncHandler(async (req, res) => {
  try {
    const { name, title, githubLink, siteLink, description} = req.body;
    const image = req.file.filename; // Get the uploaded image filename

    // Create a new blog post in MongoDB
    const Project = new project({  name, title, githubLink, siteLink, description, image });
    await Project.save();

    res.status(201).json({ Project: 'Project  created successfully' });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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

const getProject = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const userProject = await project.findById({ _id: id });
    res.status(200).json(userProject);
  } catch (error) {
    console.log("error occured !");
    res.status(500).json({ message: error.message });
  }
});

const projectLikes = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.id;

    const Project = await project.findById(projectId);

    if (!Project) {
      return res.status(404).json({ message: "peoject not found" });
    }

    Project.likes += 1;
    await Project.save();

    return res
      .status(200)
      .json({ message: "Project liked successfully", likes: project.likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

const updateProject = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const newProject = await project.findByIdAndUpdate(
      { _id: id },
      {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        githubLink: req.body.githubLink,
        siteLink: req.body.siteLink,
        name: req.body.name,
      }
    );
    res.status(200).json(newProject);
  } catch (error) {
    console.log("error occured !");
    res.status(500).json({ message: error.message });
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

const projectComments = asyncHandler( async (req, res) => {
  try {
    const text = req.body;
    const projectId = req.params.id;
   
    // Find the blog post by ID
    const Project = await project.findById(projectId);

    if (!Project) {
      return res.status(404).json({ error: 'Blog not found' });
    }
 
    // Add the comment to the blog's comments array
    Project.comments.push({
      text,
    }
    
    );

    // Save the updated blog post
    await Project.save();
  
  
    res.status(201).json(Project.comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
   
  }
});

const getCommentsForProject = asyncHandler(async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find the blog post by ID
    const Project = await project.findById(projectId);

    if (!Project) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Check if the blog has comments
    if (!Project.comments || Project.comments.length === 0) {
      return res.status(404).json({ message: 'No comments found for this blog' });
    }

    // Return the comments for the blog
    res.status(200).json(Project.comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});



const  myBlogs = asyncHandler(async (req, res) => {
  try {
    const { title, heading, description } = req.body;
    const image = req.file.filename; // Get the uploaded image filename

    // Create a new blog post in MongoDB
    const Blog = new blogs({ title, heading, description, image });
    await Blog.save();

    res.status(201).json({ Blog: 'Blog post created successfully' });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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


  const blogComments = asyncHandler( async (req, res) => {
    try {
      const text = req.body;
      const blogId = req.params.id;
     
      // Find the blog post by ID
      const Blog = await blogs.findById(blogId);
  
      if (!Blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
   
      // Add the comment to the blog's comments array
      Blog.comments.push({
        text,
      }
      
      );
  
      // Save the updated blog post
      await Blog.save();
    
    
      res.status(201).json(Blog.comments);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
     
    }
  });
// Get comments for a specific blog post
const getCommentsForBlog = asyncHandler(async (req, res) => {
  try {
    const blogId = req.params.id;

    // Find the blog post by ID
    const blog = await blogs.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Check if the blog has comments
    if (!blog.comments || blog.comments.length === 0) {
      return res.status(404).json({ message: 'No comments found for this blog' });
    }

    // Return the comments for the blog
    res.status(200).json(blog.comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
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

const getBlog = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const userBlog = await blogs.findById({ _id: id });
    res.status(200).json(userBlog);
  } catch (error) {
    console.log("error occured !");
    res.status(500).json({ message: error.message });
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const newBlog = await blogs.findByIdAndUpdate(
      { _id: id },
      {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
      }
    );
    res.status(200).json(newBlog);
  } catch (error) {
    console.log("error occured !");
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

const myComments = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    const Comment = await comment.create({
      message,
    });
    res.status(200).json(Comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

export {
  myProjects,
  getProjects,
  getProject,
  projectLikes,
  myBlogs,
  getBlogs,
  getBlog,
  updateBlog,
  myFeedbacks,
  getFeedbacks,
  deleteFeedbacks,
  Likes,
  updateProject,
  deleteProjects,
  deleteBlogs,
  myComments,
  blogComments,
  getCommentsForBlog,
  projectComments,
  getCommentsForProject
};

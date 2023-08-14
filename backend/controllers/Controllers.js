import asyncHandler from 'express-async-handler';
import project from '../models/projectModel.js';


const myProjects = asyncHandler(async (req, res) => {
  try {
    const { name, title, description, image } = req.body;
    const Project = await project.create({
      name,
      title,
      description,
      image,
    });
    res.status(200).json(Project);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const getProjects= asyncHandler(async(req, res)=>{ 
    try{
        const Projects =  await project.find({})
        res.status(200).json(Projects);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
  });

export { myProjects , getProjects};

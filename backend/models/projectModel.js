import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true,
        
    },
    githubLink:{
        type: String,
        required:true,
        
    },
    siteLink:{
        type: String,
        required:true,
        
    },
    description:{
        type: String,
        required:true
    },
    likes:{
        type: Number,
        default: 0
    },
    comments: [
        {
          text: {
            type: [],
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    image:{
        data:Buffer,
        type:String,
        required:false
    }
},{
    timestamps: true
});

const project = mongoose.model('Project',projectSchema);
export default project;
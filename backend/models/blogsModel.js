import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    
    title:{
        type: String,
        required:true,
        
    },
    heading:{
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
    image:{
        data:Buffer,
        type:String,
        required:false
    }
},{
    timestamps: true
});

const blogs = mongoose.model('Blogs',blogsSchema);
export default blogs;
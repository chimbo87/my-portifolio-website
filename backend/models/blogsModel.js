import mongoose from "mongoose";

const blogsSchema = mongoose.Schema({
    
    title:{
        type: String,
        required:true,
        
    },
    description:{
        type: String,
        required:true
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
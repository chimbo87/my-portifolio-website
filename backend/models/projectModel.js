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

const project = mongoose.model('Project',projectSchema);
export default project;
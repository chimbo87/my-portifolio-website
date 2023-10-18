import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    
    message:{
        type: String,
        required:true,
        
    }
  
},{
    timestamps: true
});

const comment = mongoose.model('Comments',commentSchema);
export default comment;
import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
    
    name:{
        type: String,
        required:true,
        
    },
    number:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true,
    },
    message:{
        type: String,
        required:true,
    }
},{
    timestamps: true
});

const feedback = mongoose.model('Feedbacks',feedbackSchema);
export default feedback;
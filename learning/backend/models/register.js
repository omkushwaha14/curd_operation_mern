import mongoose from "mongoose";

const registerSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter name"]
    },

    email:{
        type: String,
        required:[true,"please enter email"]
    },

    age :{
        type: Number,
        required:[true,"please enter email"]
    }
})

export default mongoose.model("Register",registerSchema)
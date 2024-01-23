import mongoose from "mongoose";

const connectDatabase=()=>{
   let DB_URI=process.env.DB_LOCAL_URI;

    mongoose.connect(DB_URI).
    then((con)=>{
      console.log(`Mongodb database connected:`)
    })
};

export default connectDatabase;
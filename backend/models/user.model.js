import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,enum:["job seeker","recruiter"],default:"job seeker"},
});

 const User=mongoose.model("User",userSchema);

 export default User;
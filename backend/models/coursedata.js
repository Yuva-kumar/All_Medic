import mongoose from "mongoose";
const Schema=mongoose.Schema
const courses =new Schema({
    course:{
        type:String,
        required:true
    },
    course_selection:{
        type:String,
        required:true
    }
})
export default mongoose.model('course',courses)
                            //collectionnmae,variable
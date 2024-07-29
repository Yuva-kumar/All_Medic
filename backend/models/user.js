// import mongoose from "mongoose";
// const schema = mongoose.Schema
// const user = new schema({
//     username:{
//         type:string
//     },
//     password:{
//         type:string
//     },
// })
// export default mongoose.model('users',user)
import mongoose from "mongoose";
const Schema=mongoose.Schema
const usered =new Schema({
    user:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
export default mongoose.model('users',usered)
                            //collectionnmae,variable
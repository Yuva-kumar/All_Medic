// //console.log("testing")
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from "cors";
// // import user from "./modules"
// import student from "./models/student";
// const app=express();
// app.use(bodyParser.json());
// app.use(cors())
// g

// mongoose.connect('mongodb+srv://duvvarapuyuvakumar44:tahC50oOKUGLNeUX@cluster0.h3lxlkh.mongodb.net/DriveReady?retryWrites=true&w=majority')
// .then(() => app.listen(4484))
// .then(() =>
// console.log("connected to Database & Listening to localhost 4484")
// )
// .catch((err) => console.log(err));
// //http://localhost:4484/adddata
// app.post('/addstud',(req,res)=>{
//     console.log(req.body)//form data from frontend
//     const {name,rollno,college,branch}=req.body
//     const stud=new student({
//         name,
//         rollno,
//         college,
//         branch
//     })
//     try{
//         stud.save()
//     }
//     catch(err){
//         console.log(arr)
//     }
//     return res.send({'msg':'instead'})
//     //perform action
//     // res.send({"msg":"success"})
// })
import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import multer from 'multer';
import nodemailer from "nodemailer";
import student from "./models/student";
import student1 from './models/student1';


//import student1 from "./models/student1";

//const express=require('express')
const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://duvvarapuyuvakumar44:tahC50oOKUGLNeUX@cluster0.h3lxlkh.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(()=>app.listen(4484))
.then(()=>
console.log("Connected to Database & listining to localhost 4484")
)
.catch((err)=>console.log(err));
//http://localhost:4700/postdata
//  app.post('/addstudent',(req,res,next)=>{

//    console.log(req.body.formdata) //formdata from the frontend
//    const {name, rollno, college, branch}=req.body.formdata
//    const stud=new student({
//       name,
//       rollno,
//       college,
//       branch
//    })
//    stud.save()
//    return res.send({"students":stud})
//   // res.send({"msg":"success"})
// })
// app.get('/getstudents',async (req,res,next)=>{
//     let studentdata;
//     try{
//      studentdata=await student.find();
//   }catch(err){
//      console.log(err);
//   }
//   if(!studentdata){
//      return res.status(404).json({message:"No students found"})
//   }
//   return res.status(200).json({studentdata})
//   })

//   app.delete('/deleteuser/:id',async(req,res,next)=>{
//      const _id=req.params.id
//      let studentdata;

//      try{
//         studentdata=await student.findByIdAndDelete(_id)
//      }
//      catch(err){
//         console.log(err)
//      }
//      if(!studentdata){
//         // return.res.status(await)
//         return res.status(404).json({message:"No users found"})
//      }
//      return res.status(200).json({studentdata})
//   })

//   //to edit the form
//   app.get('/getstudentbyid/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     let studentdata;
//     try{
//      studentdata=await student.findById(_id)
//   }catch(err){
//      console.log(err);
//   }
//   if(!studentdata){
//     console.log("no students found")
    
//   }
//   return res.status(200).json({studentdata})
//   })
 
//   app.put('/updatestudent/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     const {name,rollno,college,branch}=req.body.formdata
//     let stud;
//     try{
//        stud=await student.findByIdAndUpdate
//        (_id,{name,rollno,college,branch});
//     }
//     catch(err){
//        console.log(err)
//     }
//     return res.send({msg:"Updated","result":stud})
//    
//  })npm start
//multer
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now()+"_"+file.originalname)
  }
})

const upload = multer({storage: storage })

app.post('/addstudent1',upload.single('myfile'),async (req,res,next)=>{

  //  console.log(req.body.formdata) //formdata from the frontend
   const profile=(req.file)? req.file.filename :null
   const {name, email,password}=req.body
  //  console.log(req.body.formdata)
   const stud1=new student1({
      name,
      email,
      password,
      profile,
   })
   stud1.save()
   return res.send({"students1":stud1})
  // res.send({"msg":"success"})


var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'duvvarapuyuvakumar44@gmail.com',
     pass: 'fgho vupm evsf pmrd'
   }
 });
 
 var mailOptions = {
   from: 'duvvarapuyuvakumar44@gmail.com',
   to: email,
   subject: 'Sending Email using Node.js',
   text: 'That was easy!'
 };
 
 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email sent: ' + info.response);
  }
 })
});
const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const path = require('path'); 
dotenv.config(path.resolve(__dirname, '../.env'));
const MONGO_URI= process.env.Mongo_URI; 
const connectDatabase= async (req,res,next)=>{
  await mongoose.connect(MONGO_URI).then(()=>{
    console.log("Database connected successfully");
  }).catch((err)=>{
    console.log("Database connection failed", err);
    throw err;
  });
  next();
}

module.exports= connectDatabase;
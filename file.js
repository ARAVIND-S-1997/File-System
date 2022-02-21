import express from "express";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config(); 

const server = express();
const port = process.env.PORT;
server.listen(port,()=>{console.log("express is running on port 9000")})

const dateObject = new Date();

// current date
const date = (`0 ${dateObject.getDate()}`).slice(-2);
 
// current month
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);

 // current time
const year = dateObject.getFullYear();

 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 
// Date 
const dateStamp=`${date}-${month}-${year}`;

// Time

const timeStamp=`${hours}:${minutes}:${seconds}`;

// Create file

fs.writeFile(`${dateStamp}.txt`,timeStamp,(err)=>{
  console.log("completed")
})




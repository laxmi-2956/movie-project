const express = require("express");

require("dotenv").config();
const cors=require("cors");


const connection=require("./Configs/db")

var cookieParser = require('cookie-parser');
const MovieRouter = require("./routes/movie.router");
const userRouter = require("./routes/user.router");
const app=express();
app.use(cors({
    origin:[ "http://localhost:5173"],
    credentials: true,
}))
app.use(express.json())

app.use(cookieParser())
app.use(express.static("./uploads"))
app.use("/api/user",userRouter)
app.use("/api/movie",MovieRouter)





app.listen(process.env.PORT, async()=>{
    try {
        await connection

        console.log(`server is running on port ${process.env.PORT}`);
        console.log("<<<<<<<<<<< Connected to database >>>>>>>>>>>>>>");
    } catch (error) {
        console.log(error);
        
    }
   
})
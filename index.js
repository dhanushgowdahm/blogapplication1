
const path = require('path');
const express = require('express');
const {connectToMongoDB } = require("./connect")
 const app = express();
 const {}= require('./models/user')




const PORT = 8000;

connectToMongoDB('mongodb://localhost:27017/blogapplication')
.then(()=>console.log("mongodb connected"))

//mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e)=> console.log("mongoDB connected")); 

const   userRoute = require("./routes/user")

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:false}));
app.get("/", (req,res)=>{
    res.render("home");
});

app.use("/", userRoute);

 app.listen(PORT, ()=> console.log(`server start at PORT : ${PORT}`)); 
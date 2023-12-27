import  express  from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app =express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/backendDB")
.then(()=>console.log("server connected to the database"))
.catch((err)=> console.log(err))

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

app.get("/", function(req, res){
    res.send("Hello Friends");
})
app.listen("3000", function(req, res){
    console.log("port is running at 3000");
})

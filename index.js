const express=require("express");
const path=require("path");
const cookieParser=require("cookie-parser")
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend",
})
.then(()=>console.log("Database connected"))
.catch((e)=>console.log(e))

const messageSchema=new mongoose.Schema({
    name:String,
    email:String,
});
const message=mongoose.model("message",messageSchema)
const port=5000;
const users=[];
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

// app.get("/add",async(req,res)=>{
// await message.create({name:"Akash",email:"sample@gmail.com"}).then(()=>{
//     res.send("nice");
// })
// })
app.get("//",(req,res)=>{
   console.log(req.cookies);
    const {token}=req.cookies;
    if(token){
        res.render("logout")
    }
    else{
        res.render("login")
    }
    res.render("login")
});
app.post("/login",(req,res)=>{
res.cookie("token","iAMin");
//     httpOnly:true,
//     expires:new Date(Date.now()+60*1000)
// });
res.redirect("//");
});
app.get("/logout",(req,res)=>{
res.cookie("token",null);
res.redirect("//");
});

app.get("/show",(req,res)=>{
   res.render("index")
});

app.get("/success",(req,res)=>{
res.render("success");
})

app.post("/",async(req,res)=>{
// const messageData=users.push({username:req.body.name, email:req.body.email});
// console.log(messageData);
const {name,email}=req.body;
await message.create({name:name,email:email});
res.redirect("/success");
});

app.get("/users",(req,res)=>{
    res.json({
        users,
    });
})
app.get("/home",(req,res)=>{
    res.send("It is Home")
});

app.get("/About",(res,req)=>{
    res.send("About")
});
app.get("/a",(req,res)=>{
    console.log(path.join(__dirname,"./views/index.ejsindex.ejs"))
    // res.json({
    //     success:"true",
    //     products:[],
    // });
});
app.listen(5000,()=>{
console.log("the server is working....")
});
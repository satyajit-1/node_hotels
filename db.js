const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels'

//setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//mongodb maintain default connction with mongodb connection
const db=mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDb server');
});
db.on('error',(err)=>{
    console.log('MongoDb connection error',err);
});
db.on('disconnected',()=>{
    console.log('Disconnected');
});
module.exports=db;
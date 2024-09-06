// const jsonString='{"name":"John","age":30,"city":"New York"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);

//object to string:
// const ObjecttoConvert={
//     name:"Satya",
//     age:34,
//     city:"Surat"
// };
// const json=JSON.stringify(ObjecttoConvert);
// console.log(json);

//express for making server
const express=require('express');
const app=express();
const db=require('./db')
const Person=require('./models/Person');
const Menu=require('./models/Menu');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send('hello Sir...How can i help you')
});
app.post('/person',async(req,res)=>{
    try{
            //Assuming request body contains person data
    const data=req.body
    const newPerson=new Person(data);
    //save newPerson to database
    const response=await newPerson.save();
    console.log('data saved successfully');
    res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

})
// app.get("/chicken",(req,res)=>{
//     res.send("Ok sir,I will server chicken")
// });
// app.get("/daal",(req,res)=>{
//     res.send("Server give me Daal")
// });
// app.get("/idli",(req,res)=>{
//     var customized_idli={
//         name:'rava-idli',
//         size:"10 cm diameter",
//         is_Sambar:true,
//         is_Chutney:false
//     }
//     res.send(customized_idli)
// });
app.get('/person',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('Data fetched successfully');
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error'});
    }
})

app.post('/menu',async(req,res)=>{
    try{
        const data=req.body;
        const newMenuItem=new Menu(data);
        const response=await newMenuItem.save();
        console.log('Data added successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error has occured'})
    }
})
app.get('/menu',async(req,res)=>{
    try{
        const data=await Menu.find();
        console.log('Data fetched successfully');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error has occured'})
    }
})
app.get('/person/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager'){
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.send(200).json(response);

        }
        else{
            res.status(404).json({error:'Invalid work type'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
      
    }
    
})

app.listen(2000);

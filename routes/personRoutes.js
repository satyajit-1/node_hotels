// const express=require('express');
// const router=express.Router();
// const person=require('./../models/Person')
// router.post('/',async(req,res)=>{
//     try{
//             //Assuming request body contains person data
//     const data=req.body
//     const newPerson=new Person(data);
//     //save newPerson to database
//     const response=await newPerson.save();
//     console.log('data saved successfully');
//     res.status(200).json(response);

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server error'});
//     }

// })
// router.get('/',async(req,res)=>{
//     try{
//         const data=await Person.find();
//         console.log('Data fetched successfully');
//         res.status(200).json(data)
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:'Internal server error'});
//     }
// })
// router.get('/:workType',async(req,res)=>{
//     try{
//         const workType=req.params.workType;
//         if(workType =='chef' || workType =='waiter' || workType =='manager'){
//             const response=await Person.find({work:workType});
//             console.log('response fetched');
//             res.send(200).json(response);

//         }
//         else{
//             res.status(404).json({error:'Invalid work type'})
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal server error'})
      
//     }
    
// })
// module.exports=router;
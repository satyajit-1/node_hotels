const mongoose=require('mongoose')
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['Sweet','Sour','Spicy'],
        required:true
    },
    isdrink:{
        type:Boolean,
        default:false
    },
    ingridents:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});
const menuItem=mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;
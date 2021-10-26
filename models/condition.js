const mongoose=require("mongoose")
const Condition=mongoose.model('conditions',{
    act :{
        type:String,
        required:true
    }, 
    taille :{
        type:String,
        required:true
    }, 
    pays :{
        type:String,
        required:true
    } ,
    dev :{
        type:String,
        required:true
    }
})

module.exports=Condition
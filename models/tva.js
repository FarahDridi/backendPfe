const mongoose=require("mongoose")
const Tva=mongoose.model('tva',{
    valeur :{
        type:String,
        required:true
    }
})

module.exports=Tva
const mongoose=require("mongoose")
const Taxe=mongoose.model('taxes',{
    nom :{
        type:String,
        required:true
    }, 
    label :{
        type:String,
        required:true
    }, 
    type :{
        type:String
    } ,
    signe :{
        type:String
    } ,
    valeur :{
        type:String,
        required:true
    },
    taxe_tva:{
        type:String
    },
    utilisation :{
        type:String
    },
    application :{
        type:String
    },
    taxe_produits :{
        type:String

    }
})
module.exports=Taxe
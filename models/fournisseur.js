const mongoose=require("mongoose")
const Fournisseur=mongoose.model('fournisseurs',{
    raison:{
        type:String
    },
    site:{
        type:String
    },
    civilite :{
        type:String
    },
    nom :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    num :{
        type:String
    },
    pays :{
        type:String,
        required:true
    },
    region :{
        type:String
    },
    code :{
        type:String
    },
    type_facture :{
        type:String
    },
    adresse :{
        type:String
    },
    date_creation :{
        type:String,
        default:Date.now

    }
})
module.exports=Fournisseur
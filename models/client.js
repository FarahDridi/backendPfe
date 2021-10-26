const mongoose=require("mongoose")
const Client=mongoose.model('clients',{
    type :{
        type:String
    },
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
    delai :{
        type:String
    },
    det :{
        type:String
    },
    date_creation :{
        type:String,
        default:Date.now

    }
})
module.exports=Client
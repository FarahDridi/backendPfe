const mongoose=require("mongoose")
const Entreprise=mongoose.model('données',{
    ent:{
        type:String
    },
    tel:{
        type:String
    },
    mob :{
        type:String
    },
    site :{
        type:String,
        required:true
    },
    matricule :{
        type:String,
        unique:true
    },
    devis :{
        type:String
    },
    email :{
        type:String,
        unique:true
    },
    prenom :{
        type:String
    },
    nom :{
        type:String
    },
    adresse :{
        type:String
    },
    ville :{
        type:String
    },
    code :{
        type:String
    },
    pays :{
        type:String
    }
})
module.exports= Entreprise
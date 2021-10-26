const mongoose=require("mongoose")
const Facture=mongoose.model('factures',{
    
    client:{
        type:String,
        required:true
    },
    date_document:{
        type:String,
        default:Date.now
    },
    projet :{
        type:String
    },
    note :{
        type:String
    },
    designation :{
        type:String,
        required:true
    },
    quantite :{
        type:String
    },
    prix_ht :{
        type:String,
        required:true
    },
    unite :{
        type:String
    },
    tva :{
        type:String
    },
    total_ht :{
        type:String
    },
    etat :{
        type:String
    },
    date :{
        type:String,
        default:Date.now

    }
})
module.exports=Facture
const mongoose=require("mongoose")
const Client = require("./client")
const Service = require("./service")
const Commande=mongoose.model('commandes',{
    
    client:{
        type:Object,
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
    service:{
        type:Object,
        required:true
    },
    quantite :{
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
module.exports=Commande
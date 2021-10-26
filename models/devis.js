const mongoose=require("mongoose")
const Client = require("./client")
const Service = require("./service")
const Devis=mongoose.model('devis',{
    
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
    summary:{
        type:Object
    },
    base:{
        type:Number
    },
    montant: {
        type:Number
    },
    totalHt: {
        type:Number
    },
    totalFODEC: {
        type:Number
    },
    totalTVA: {
        type:Number
    },
    totalTTC: {
        type:Number
    },
    timbreFiscale: {
        type:Number
    },
    totalPayer:{
        type:Number
    },
    etat :{
        type:String
    },
    date :{
        type:String,
        default:Date.now

    }
})
module.exports=Devis
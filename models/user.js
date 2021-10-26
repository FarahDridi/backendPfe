const mongoose=require("mongoose")
const User=mongoose.model('users',{
     nom :{
        type:String
    }, 
    prenom :{
        type:String
    }, 
    email :{
        type:String,
        required:true,
        unique:true
    } ,
    password :{
        type:String,
        required:true
    } ,
    num:{
        type:String
    },
    target:{
        type:String
    },
    ent :{
        type:String
    },
    role :{
        type:String,
        default:'user'
    },
    date :{
        type:String,
        default:Date.now

    },
    mobile :{
        type:String
    },
    site :{
        type:String
    },
    matricule :{
        type:String
    },
    devise :{
        type:String
    },
    adresse :{
        type:String
    },
    ville :{
        type:String
    },
    code_postal :{
        type:String
    },
    pays :{
        type:String
    }
})

module.exports=User
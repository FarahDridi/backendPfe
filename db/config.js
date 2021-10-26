const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://farah:farah123@cluster0.rbi0q.mongodb.net/backend?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,         // connect hia fonction asynchrone na3rfouch temps d'execution mte3ha mouch ma3rouf
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() => { // fl asynchrone n7otou then ama synchrone n7otou try
    console.log("we are connected to database !")
})
.catch(() => {
    console.log("connection ERROR !")
})
module.exports=mongoose
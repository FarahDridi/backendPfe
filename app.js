
const express = require('express');
const cors= require('cors')
require('./db/config')

const userController=require('./controllers/userController')
const clientController=require('./controllers/clientController')
const fournisseurController=require('./controllers/fournisseurController')
const serviceController=require('./controllers/serviceController')
const devisController=require('./controllers/devisController')
const commandeController=require('./controllers/commandeController')
const factureController=require('./controllers/factureController')
const taxeController=require('./controllers/taxeController')
const tvaController=require('./controllers/tvaController')
const conditionController=require('./controllers/conditionController')
const entrepriseController=require('./controllers/entrepriseController')

const app = express();
app.use(cors()) //accés des serveurs
app.use(express.json()) //accés des données
app.use(express.urlencoded({ // ykhali les API mte3k ye9bl les fichiers, ykhali les fichiers yodakhlou lel serveur
    extended:true
}))

   

app.use(express.static('./assets/services')) // ykhaliw les dossiers accessible ml Front
app.use(express.static('./assets/entreprise'))


app.use('/user',userController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})


app.use('/client',clientController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})


app.use('/service',serviceController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})


app.use('/devis',devisController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/commande',commandeController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})


app.use('/facture',factureController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/taxe',taxeController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/tva',tvaController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/condition',conditionController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/fournisseur',fournisseurController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})

app.use('/entreprise',entrepriseController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})


app.listen(3000, function () {
    console.log('server started');
})


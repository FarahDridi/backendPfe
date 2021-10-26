const express = require('express')
const Commande = require('./../models/commande')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to client controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body
        let commande = new Commande({
            client: data.client,
            date_document:data.date_document,
            projet:data.projet,
            note:data.note,
            service: data.service,
            quantite: data.quantite,
            etat:data.etat,
            date:data.date

        })

        let commandeFormDb = await commande.save()
        res.status(200).send({ message: 'Document enregistré avec succés' ,_id: commande._id})

    } catch (error) {
        res.status(400).send({ message: 'commande not added', error })
    }

})



app.get('/all', async (req, res) => {
    try {
        let commande = await Commande.find() // traja3 tab d'objets
        res.status(200).send(commande)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})


app.get('/one/:id', async (req, res) => {
    try {
        let myid = req.params.id;
        let commande = await Commande.findOne({ _id: myid })
        if (!commande) {
            res.status(404).send({ message: "commande not found" })
        }
        else
            res.status(200).send({ commande })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})



  
  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedCommande = await Commande.findOneAndDelete({ _id: id })
      if (!deletedCommande) {
        res.status(404).send({ message: "commande not found" })
      }
      else {
        res.status(200).send({ message: "commande deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app
const express = require('express')
const Devis = require('./../models/devis')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to client controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body
        let devis = new Devis({
            client: data.client,
            date_document:data.date_document,
            projet:data.projet,
            note:data.note,
            service: data.service,
            summary: data.summary,
            base: data.base,
            montant: data.montant,
            totalHt: data.totalHt,
            totalFODEC: data.totalFODEC,
            totalTVA: data.totalTVA,
            totalTTC: data.totalTTC,
            timbreFiscale: data.timbreFiscale,
            totalPayer: data.totalPayer,
            etat:data.etat,
            date:data.date

        })

        let devisFormDb = await devis.save()
        res.status(200).send({ message: 'Document enregistré avec succés' ,_id: devis._id})

    } catch (error) {
        res.status(400).send({ message: 'devis not added', error })
    }

})



app.get('/all', async (req, res) => {
    try {
        let devis = await Devis.find() // traja3 tab d'objets
        res.status(200).send(devis)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})


app.get('/one/:id', async (req, res) => {
    try {
        let myid = req.params.id;
        let devis = await Devis.findOne({ _id: myid })
        if (!devis) {
            res.status(404).send({ message: "devis not found" })
        }
        else
            res.status(200).send({ devis })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/update_info/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedDevis = await Devis.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedDevis) {
        res.status(404).send({ message: "devis not found" })
      }
      else {
        res.status(200).send({ message: "devis updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.put('/update_etat/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedDevis = await Devis.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedDevis) {
        res.status(404).send({ message: "devis not found" })
      }
      else {
        res.status(200).send({ message: "devis updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedDevis = await Devis.findOneAndDelete({ _id: id })
      if (!deletedDevis) {
        res.status(404).send({ message: "devis not found" })
      }
      else {
        res.status(200).send({ message: "devis deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app
const express = require('express')
const Fournisseur = require('./../models/fournisseur')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to fournisseur controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let fournisseur = new Fournisseur({
            raison:data.raison,
            site:data.site,
            civilite: data.civilite,
            nom: data.nom,
            email: data.email,
            num: data.num,
            pays: data.pays,
            region: data.region,
            code: data.code,
            type_facture: data.type_facture,
            adresse: data.adressse,
            date_creation: data.date_creation

        })

        let fournisseurFormDb = await fournisseur.save()
        res.status(200).send({ message: 'fournisseur added succefuly' })

    } catch (error) {
        res.status(400).send({ message: 'fournisseur not added', error })
    }

})

app.get('/all', async (req, res) => {
    try {
        let fournisseurs = await Fournisseur.find() // traja3 tab d'objets
        res.status(200).send(fournisseurs)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let fournisseur = await Fournisseur.findOne({ _id: id })
        if (!fournisseur) {
            res.status(404).send({ message: "fournisseur not found" })
        }
        else
            res.status(200).send({ fournisseur })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/update_info/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedFournisseur = await Fournisseur.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedFournisseur) {
        res.status(404).send({ message: "Fournisseur not found" })
      }
      else {
        res.status(200).send({ message: "Fournisseur updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedFournisseur = await Fournisseur.findOneAndDelete({ _id: id })
      if (!deletedFournisseur) {
        res.status(404).send({ message: "Fournisseur not found" })
      }
      else {
        res.status(200).send({ message: "Fournisseur deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app
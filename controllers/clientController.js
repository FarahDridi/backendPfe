const express = require('express')
const Client = require('./../models/client')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to client controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let client = new Client({
            type: data.type,
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
            adresse: data.adresse,
            delai: data.delai,
            det: data.det,
            date_creation: data.date_creation

        })

        let clientFormDb = await client.save()
        res.status(200).send({ message: 'client added succefuly' })

    } catch (error) {
        res.status(400).send({ message: 'client not added', error })
    }

})

app.get('/all', async (req, res) => {
    try {
        let clients = await Client.find() // traja3 tab d'objets
        res.status(200).send(clients)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let client = await Client.findOne({ _id: id })
        if (!client) {
            res.status(404).send({ message: "client not found" })
        }
        else
            res.status(200).send({ client })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/update_info/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedClient = await Client.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedClient) {
        res.status(404).send({ message: "client not found" })
      }
      else {
        res.status(200).send({ message: "client updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedClient = await Client.findOneAndDelete({ _id: id })
      if (!deletedClient) {
        res.status(404).send({ message: "client not found" })
      }
      else {
        res.status(200).send({ message: "client deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app
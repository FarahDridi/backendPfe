const express = require('express')
const Facture = require('./../models/facture')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to facture controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let facture = new Facture({
           
            client: data.client,
            date_document:data.date_document,
            projet:data.projet,
            note:data.note,
            designation: data.designation,
            quantite: data.quantite,
            prix_ht: data.prix_ht,
            unite: data.unite,
            tva: data.tva,
            total_ht: data.total_ht,
            etat:data.etat,
            date:data.date
        })

        let factureFormDb = await facture.save()
        res.status(200).send({ message: 'Document enregistré avec succés' })

    } catch (error) {
        res.status(400).send({ message: 'facture not added', error })
    }

})

app.get('/all', async (req, res) => {
    try {
        let factures = await Facture.find() // traja3 tab d'objets
        res.status(200).send(factures)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})


app.get('/non_archive', async (req, res) => {
  liste_nonarchive=[]; 

  try {
      let facture = await Facture.find().then(x=>{
        x.forEach(element=>{
          if(element.archive==false){
             liste_nonarchive.push(element)
          }
        })
      }) 

      res.status(200).send(liste_nonarchive)
  } catch (error) {
      res.status(400).send({ message: 'API failed ' })
  }


})
app.get('/archive', async (req, res) => {
  liste_nonarchive=[]; 

  try {
      let facture = await Facture.find().then(x=>{
        x.forEach(element=>{
          if(element.archive==true){
             liste_nonarchive.push(element)
          }
        })
      }) 

      res.status(200).send(liste_nonarchive)
  } catch (error) {
      res.status(400).send({ message: 'API failed ' })
  }


})


app.get('/one/:id', async (req, res) => {
    try {
        let myid = req.params.id;
        let facture = await Facture.findOne({ _id: myid })
        if (!facture) {
            res.status(404).send({ message: "facture not found" })
        }
        else
            res.status(200).send({ facture })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/update_info/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedFacture = await Facture.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedFacture) {
        res.status(404).send({ message: "facture not found" })
      }
      else {
        res.status(200).send({ message: "facture updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.put('/update_etat/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedFacture = await Facture.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedFacture) {
        res.status(404).send({ message: "facture not found" })
      }
      else {
        res.status(200).send({ message: "facture updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedFacture = await Facture.findOneAndDelete({ _id: id })
      if (!deletedFacture) {
        res.status(404).send({ message: "facture not found" })
      }
      else {
        res.status(200).send({ message: "facture deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

module.exports = app
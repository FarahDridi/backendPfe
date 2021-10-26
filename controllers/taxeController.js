const express = require('express')
const Taxe = require('./../models/taxe')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to taxe controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let taxe = new Taxe({
            nom: data.nom,
            label:data.label,
            type:data.type,
            signe:data.signe,
            valeur: data.valeur,
            taxe_tva: data.taxe_tva,
            utilisation: data.utilisation,
            application: data.application,
            taxe_produits: data.taxe_produits

        })

        let taxeFormDb = await taxe.save()
        res.status(200).send({ message: 'taxe added succefuly' })

    } catch (error) {
        res.status(400).send({ message: 'taxe not added', error })
    }

})

app.get('/all', async (req, res) => {
    try {
        let taxes = await Taxe.find() // traja3 tab d'objets
        res.status(200).send(taxes)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }
})

module.exports = app
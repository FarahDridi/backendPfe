const express = require('express')
const Tva = require('./../models/tva')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to tva controller");
})


app.post('/add', async (req, res) => {
    try {
        let data = req.body

        let tva = new Tva({
            valeur: data.valeur
        })

        let tvaFormDb = await tva.save()
        res.status(200).send({ message: 'tva added succefuly' })

    } catch (error) {
        res.status(400).send({ message: 'tva not added', error })
    }

})



app.get('/all', async (req, res) => {
    try {
        let tva = await Tva.find() // traja3 tab d'objets
        res.status(200).send(tva)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

module.exports = app
const express = require('express');
const bcrypt = require('bcryptjs');
const Condition = require('./../models/condition');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Welcome to condition controller");
})




app.post('/condition', async (req, res) => {
  try {
      let data = req.body;
      let condition = new Condition
      ({
          act: data.act,
          taille: data.taille,
          pays: data.pays,
          dev: data.dev
      })

      let conditionFormDb = await condition.save()
      res.status(201).send({ message: 'compte créé avec succés' })


  } catch (error) {
      res.status(400).send({ message: 'sent condition failed', error })
  }
}) 


module.exports = app
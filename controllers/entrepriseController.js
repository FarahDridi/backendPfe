const express = require('express');
const bcrypt = require('bcryptjs');
const Entreprise = require('./../models/entreprise');
const jwt = require('jsonwebtoken');
const app = express();

const fs = require('fs')
const multer = require('multer') 
const path = require('path')


// paramétres stockage (taswira wiin bch n7ot'ha)
const stockage = multer.diskStorage({
  destination: './assets/entreprise', 
  filename: function (req, file, cb) {   
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

//Upload (nchekiw type lfile png.. wl 7aja thenya upload)
//check file hia ta3ml verification ltype te3 lfichier
function check(file, cb) {
  
  const types = /jpeg|jpg|png|gif|pdf /;
  const verifExt = types.test(path.extname(file.originalname).toLowerCase()) 
  const verifMime = types.test(file.mimetype) 

  if (verifExt && verifMime) {
      return cb(null, true)
  }
  else {
      cb('Invalid File Type')
  }
}


//Upload 
//configuration multer
const upload = multer({
  storage: stockage, //taswira ml front wiin bch nestockiha
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
      check(file, cb)
  }
})


app.get('/', (req, res) => {
  res.status(200).send("Welcome to entreprise controller");
})

app.get('/all', async (req, res) => {
  try {
    let données = await Entreprise.find() 
    res.status(200).send(données);

  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }
})


app.put('/update_info/:id', async (req, res) => {
  try {
    let id = req.params.id
    let data = req.body    
    let updatedEntreprise = await Entreprise.findOneAndUpdate({ _id: id }, data) 
    if (!updatedEntreprise) {
      res.status(404).send({ message: "Entreprise not found" })
    }
    else {
      res.status(200).send({ message: "Entreprise updated" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})


module.exports = app
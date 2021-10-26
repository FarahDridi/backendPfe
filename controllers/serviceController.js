const express = require('express')
const Service = require('./../models/service')
const app = express()

const fs = require('fs') // manipulation des fichiers nbadlelhom esmhom ..np
const multer = require('multer') //gerer les fichiers eli jeyiin ml Front ay naw3 te3 fichier //fih des fonctionnalités najmou bihom nestockiw des donnés jeyin ml backend
const path = require('path')


// paramétres stockage (taswira wiin bch n7ot'ha)
const stockage = multer.diskStorage({
  destination: './assets/services', // wiin bch nestocki lfichier
  filename: function (req, file, cb) {     //cb fonction nexécutiwha bch tekhdmelna khedma mou3ayna //req données eli jeyin ml Front w file fichier eli jeya ml front w cb nmanipuli biha esm lfichier
      cb(null, Date.now() + path.extname(file.originalname))  //parametre loul null eli houa erreur null khater 3andich error WL paramétre theni esmou esmou ykoun unique bl date khatrou bl ms WL extname ya3tini l'extension te3 lfichier
  }
})

//Upload (nchekiw type lfile png.. wl 7aja thenya upload)
//check file hia ta3ml verification ltype te3 lfichier
function check(file, cb) {
  
  const types = /jpeg|jpg|png|gif|pdf /;
  const verifExt = types.test(path.extname(file.originalname).toLowerCase()) //extention fichier
  const verifMime = types.test(file.mimetype) //type fichier

  if (verifExt && verifMime) {
      return cb(null, true) //true ma3neha ekhdem lkhedma te3 tabdil lesm
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
    res.status(200).send("Welcome to service controller");
})


app.post('/add',upload.single('image'), async (req, res) => {
    try {
        let data = req.body
      
        // let file = req.file

        let service = new Service({
            type: data.type,
            lib: data.lib,
            categorie: data.categorie,
            code: data.code,
            marque: data.marque,
            description: data.description,
            image: data.image, 
            prix: data.prix,
            quantite:data.quantite,
            tpe : data.tpe,
            unite: data.unite,
            tva: data.tva,
            taxe: data.taxe,
            resultat_ht: data.resultat_ht,
            resultat_ttc: data.resultat_ttc

        })

        let serviceFormDb = await service.save()
        res.status(200).send({ message: 'service added succefuly' })

    } catch (error) {
        res.status(400).send({ message: 'service not added', error })
    }

})

app.get('/all', async (req, res) => {
    try {
        let services = await Service.find() // traja3 tab d'objets
        res.status(200).send(services)
    } catch (error) {
        res.status(400).send({ message: 'API failed ' })
    }


})

app.get('/one/:id', async (req, res) => {
    try {
        let myid = req.params.id;
        let service = await Service.findOne({ _id: myid })
        if (!service) {
            res.status(404).send({ message: "service not found" })
        }
        else
            res.status(200).send({ service })
    } catch (error) {
        res.status(400).send({ message: 'API failed ',error })

    }

})

app.put('/update_info/:id', async (req, res) => {
    try {
      let id = req.params.id
      let data = req.body    // récuperer body eli jey ml Front
      let updatedService = await Service.findOneAndUpdate({ _id: id }, data) // paramétre theni data
      if (!updatedService) {
        res.status(404).send({ message: "service not found" })
      }
      else {
        res.status(200).send({ message: "service updated" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })

  app.delete('/remove/:id', async (req, res) => {
    try {
      let id = req.params.id
      let deletedService = await Service.findOneAndDelete({ _id: id })
      if (!deletedService) {
        res.status(404).send({ message: "service not found" })
      }
      else {
        res.status(200).send({ message: "service deleted" })
      }
    } catch (error) {
      res.status(400).send({ message: "API failed", error })
    }
  })



module.exports = app
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./../models/user');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Welcome to user controller");
})



 app.post('/signup', async (req, res) => { //
  try {
    let data = req.body
   

    let user = new User({
      prenom: data.prenom, 
      nom: data.nom,
      email: data.email,
      password: data.password,
      ent:data.ent
    })
    let userFormDb = await user.save()
    
    res.status(201).send({ message: 'Admin registred succssefuly' })

  } catch (error)
    {res.status(400).send({ message: 'sign up failed !', error })
  }
  

}) 

app.post('/signin', async (req, res) => {
  try {
    let data = req.body
    let userFormDb = await User.findOne({ email: data.email })
    if (!userFormDb) {
      res.status(404).send({ message: "user not exist" })
    } else {
      let compare = (data.password, userFormDb.password)
      if (!compare) {
        res.status(404).send({ message: "user not found" })
      } else {
        let token = jwt.sign({ id: userFormDb._id, role: userFormDb.role }, "SECRET")
        res.status(200).send({ token })
      }
    }
  } catch {
    res.status(400).send({ message: 'API failed !', error })
  }
})


app.post('/add', async (req, res) => {
  try {
      let data = req.body;
      let user = new User
      ({
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          password: data.password ,
          num:data.num,
          target:data.target,
          ent:data.ent,
          date: data.date,
          mobile: data.mobile,
          site :data.site,
          matricule :data.matricule,
          devise :data.devise,
          adresse :data.adresse,
          ville :data.ville,
          code_postal :data.code_postal,
          pays :data.pays

      })

      let userFormDb = await user.save()
      res.status(201).send({ message: 'user added successfully' })


  } catch (error) {
      res.status(400).send({ message: 'add user failed', error })
  }
})


app.get('/all', async (req, res) => {
  try {
    let users = await User.find() //find fonction mn mongoose t3awedhli select * from users 
    // 3anech body fl API hedha,yet3adewch les données
    res.status(200).send(users);

  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }
})

app.get('/user', async (req, res) => {
  try {
    let users = await (await User.find()).filter(function(user){
      return user.role == "user"
    })
    res.status(200).send(users);

  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }
})
app.get('/one/:id', async (req, res) => {
  try {

    let id = req.params.id;
    let user = await User.findOne({ _id: id })

    if (!user) {
      res.status(404).send({ message: "user not found" })
    }
    else {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }

})
app.put('/update_info/:id', async (req, res) => {
  try {
    let id = req.params.id
    let data = req.body    // récuperer body eli jey ml Front
    let updatedUser = await User.findOneAndUpdate({ _id: id }, data) // paramétre theni data
    if (!updatedUser) {
      res.status(404).send({ message: "user not found" })
    }
    else {
      res.status(200).send({ message: "user updated" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})
app.delete('/remove/:id', async (req, res) => {
  try {
    let id = req.params.id
    let deletedUser = await User.findOneAndDelete({ _id: id })
    if (!deletedUser) {
      res.status(404).send({ message: "user not found" })
    }
    else {
      res.status(200).send({ message: "user deleted" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})


app.get('/currentUser/:id', async (req, res) => {
  try {
      let data = req.params.id;
      let user = await User.findOne({ _id: data })
      if (!user) {
          res.status(404).send({ message: "user not found" })
      }
      else {
          res.status(200).send(user)
      }
  }
  catch (error) {
      res.status(400).send({ message: 'API failed:', error })
  }
})


module.exports = app
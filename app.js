const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose')
const app = express();
const port =  80;
const Post = require('./routes/postR')
const Admin = require('./routes/authdemo.js')
const Admins = require('./routes/adminsR.js')
const Employee = require('./routes/employeeR.js')
const Settings = require('./routes/settingsR.js')



const db = 'mongodb://localhost:27017/test'
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(console.log("Connected"))
  .catch((err) => console.log(err));
  app.use(Post)
  app.use(Admin)
  app.use(Admins)
  app.use(Employee)
  app.use(Settings)


app.use(express.json());
app.use(express.urlencoded({extended: true}))




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// HBS SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as phbs
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/', (req, res) => {
  const params ={}
  res.render('public/home.pug', params)
})
app.get('/programming', (req, res) => {
  const params = {}
  res.status(200).render('public/programming.pug', params)
})
app.get('/gamming', (req, res) => {
  const params = {}
  res.status(200).render('public/gamming.pug', params)
})
app.get('/launchpad', (req, res) => {
  const params = {}
  res.status(200).render('public/launchpad.pug', params)
})
app.get('/news', (req, res) => {
  const params = {}
  res.status(200).render('public/news.pug', params)
})





// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

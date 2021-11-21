const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require('mongoose')
const app = express();
const port =  80;
const Post = require('./routes/postR')
const Admin = require('./routes/AdminR.js')
const Admins = require('./routes/adminsR.js')
const Employee = require('./routes/employeeR.js')
const Settings = require('./routes/settingsR.js')
const Authentication = require('./routes/Authentication.js')



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
  app.use(Authentication)


app.use(express.json());
app.use(express.urlencoded({extended: true}))




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// HBS SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as phbs
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/', (req, res) => {
  res.render('public/layout.pug', {
    page: "home"
  })
})
app.get('/programming', (req, res) => {
  res.status(200).render('public/layout.pug', {
    page: "programming"
  })
})
app.get('/gamming', (req, res) => {
  res.status(200).render('public/layout.pug', {
    page: "gamming"
  })
})
app.get('/launchpad', (req, res) => {
  res.status(200).render('public/layout.pug', {
    page: "launchpad"
  })
})
app.get('/news', (req, res) => {
  res.status(200).render('public/layout.pug', {
    page: "news"
  })
})






// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

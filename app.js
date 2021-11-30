const express = require("express");
const path = require("path");
const fs = require("fs");
const livereload = require("livereload");
const mongoose = require('mongoose')
const app = express();
const port =  80;
const Post = require('./routes/postR')
const Admin = require('./routes/AdminR.js')
const Admins = require('./routes/adminsR.js')
const Employee = require('./routes/employeeR.js')
const Settings = require('./routes/settingsR.js')
// const Authentication = require('./routes/Authentication.js')
const Public = require('./routes/PublicR.js')


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
  // app.use(Authentication)
  app.use(Public)    //having basic endpoints


app.use(express.json());
app.use(express.urlencoded({extended: true}))





// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// HBS SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as phbs
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
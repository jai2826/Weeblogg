const express = require('express')
const router = express.Router()
const Admin= require("../models/Admins")
const bcrypt = require("bcryptjs")
const passport = require("passport")

const session = require('express-session')
const cookieparser = require("cookie-parser")


router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))

router.use(cookieparser("secret"));
router.use(session({
    secret:'secret',
    maxage:3600000,
    resave:true,
    saveUninitialized:true
}));

router.use(passport.initialize());
router.use(passport.session());


//Register Authentication
router.get("/admin/register", (req, res) => {
    try {
        res.render("../views/Dashboard/adminpanel", {
            page: "adminregister"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post("/admin/register", async (req, res) => {
    try {
        var { email ,contact , password , confirmpassword} = req.body;
        var err;
        if(!email || !contact || !password || !confirmpassword)
        {
            err = "Please Fill All The Fields!!!";
            res.render("../views/Dashboard/adminpanel", {
                page: "adminregister",
                err: err
            })
        }
        if(contact.value.length != 10)
        {
            err = "Incorrect Phone Number";
            res.render("../views/Dashboard/adminpanel", {
                page: "adminregister",
                err: err
            })
        }
        if( password != confirmpassword){
            err = "Passwords do not match!!!"
            res.render("../views/Dashboard/adminpanel", {
                page: "adminregister",
                err: err
            })
        }
        if(typeof err == "undefined"){
            Admin.findOne({email:email}, function(err,data){
                if (err) throw(err);
                if(data) {
                    console.log("User Exhists");
                    err = "User Already exhists with this Email!!!";
                    res.render("../views/Dashboard/adminpanel", {
                        page: "adminregister",
                        err: err
                    })
                }else{
                    bcrypt.genSalt(10, (err , salt)=>{
                        if(err) throw err;
                        bcrypt.hash(password, salt ,(err ,hash)=>{
                            if(err) throw err;
                            password = hash;
                            Admin({
                                email,
                                contact,
                                password,
                            }).save((err , data)=>{
                                if(err) throw err;
                                res.render("../views/Dashboard/adminpanel", {
                                    page: "adminsignin",
                                    err:err
                                })
                            });
                        })
                    })
                }
            })
        } 
    } catch (err) {
        res.status(404).json(err)
    }
})

//Login Authentication
//Stratergy Start
var localstratergy = require("passport-local").Strategy;

passport.use(new localstratergy({usernameField : "email"}, (email, password, done)=>{
    Admin.findOne({email:email}, (err, data)=>{
        if(err) throw err;
        if(!data){
            return done(null, false);
        }
        bcrypt.compare(password,data.password, (err,match)=>{
            if(err){
                return done(null,false);
            }
            if(!match){
                return done(null,false);        
            }
            if(match){
                return done(null, data);
            }
        })
    })
}));

passport.serializeUser(function(Admin, done) {
    done(null, Admin._id);

});

passport.deserializeUser(function(id, done) {
  Admin.findById(id, function(err, Admin) {
    done(err, Admin);
  });
});
//End of Stratergy

router.get("/admin/signin", (req, res) => {
    try {
        res.render("../views/Dashboard/adminpanel", {
            page: "adminsignin"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/admin/signin', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/admin/signin',
        successRedirect: '/admin/post',
        failureFlash: true,
    })(req, res, next);
});


module.exports = router
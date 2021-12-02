const express = require('express')
const path = require("path")
const router = express.Router()
const fs = require('fs')
const Admin= require("../models/Admins")
const bcrypt = require("bcryptjs")

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
router.get("/admin/signin", (req, res) => {
    try {
        res.render("../views/Dashboard/adminpanel", {
            page: "adminsignin"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
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
        if(contact.value < 10)
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
                                    page: "adminsignin"
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


module.exports = router
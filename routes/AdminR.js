const express = require('express')
const path = require("path")
const router = express.Router()
const fs = require('fs')
const adminauth = require("../models/adminsauth")

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
router.get("/admin", (req, res) => {
    try {
        res.render("../views/Dashboard/adminpanel", {
            page: "adminsauth"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post("/admin/adminsauth", async (req, res) => {
    try {
        const newadmin = new adminauth({
            email: req.body.email,
            password: req.body.password
        })
        await newadmin.save();
    } catch (err) {
        res.status.json(err)
    }
})


module.exports = router
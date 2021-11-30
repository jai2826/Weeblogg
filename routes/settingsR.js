const express = require('express')
const path = require("path");
const router = express.Router();
const fs = require('fs')

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
router.get("/admin/settings", async (req,res)=>{
    try {
        res.render("../views/Dashboard/adminpanel", {
            page: "settings"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
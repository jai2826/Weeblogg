const express = require('express')
const path = require("path");
const router = express.Router();
const fs = require('fs')

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
router.get("/admin/settings", async (req,res)=>{
    try {
        res.render("../views/Dashboard/adminpanel.pug", {
            page: "settings"
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
// router.get("/admin/post/addpost", async (req,res)=>{
// try {
//         res.render("../views/Dashboard/adminpanel.pug", {
//             page: "addpost"
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// router.post("/admin/post/addpost", async (req, res) => {
//     try 
//     {   
//         const blog =  Post({
//             title: req.body.title,
//             img : req.body.img,
//             content : req.body.content,
//             author : req.body.author,
//             category : req.body.category
//         })
//         await blog.save();
//         res.render("../views/Dashboard/adminpanel.pug", {
//             page: "post"
//         })
//     } catch (err) {
//         res.render("Data not Saved")    
//     }
    
// })

// router.get("/admin/post/show", async (req,res)=>{
    
//     try {
//         res.json(db.posts.find())
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = router
const express = require('express')
const Post = require('../models/post')
const path = require("path");
const router = express.Router();
const fs = require('fs')

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))
router.get(`/post`, (req,res)=>{
try {
        res.render("../views/addpost.pug")
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/post", (req, res) => {
    try 
    {   
        const blog =  Post({
            title: req.body.title,
            img : req.body.img,
            content : req.body.content,
            author : req.body.author,
            category : req.body.category
        })
        blog.save()
        res.json(blog)
    } catch (err) {
        res.render("Data not Saved")    
    }
    
})

router.get(`/post/show`,  (req,res)=>{
    
    try {
        res.json(db.posts.find())
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
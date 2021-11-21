const express = require('express')
const router = express.Router();



// Basic end Points
router.get('/', (req, res) => {
    res.render('public/layout.pug', {
      page: "home"
    })
  })
router.get('/programming', (req, res) => {
    res.status(200).render('public/layout.pug', {
      page: "programming"
    })
  })
router.get('/gamming', (req, res) => {
    res.status(200).render('public/layout.pug', {
      page: "gamming"
    })
  })
router.get('/launchpad', (req, res) => {
    res.status(200).render('public/layout.pug', {
      page: "launchpad"
    })
  })
router.get('/news', (req, res) => {
    res.status(200).render('public/layout.pug', {
      page: "news"
    })
  })
  module.exports = router
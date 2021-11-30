const express = require('express')
const router = express.Router();



// Basic end Points
router.get('/', (req, res) => {
    res.render('public/layout', {
      page: "home"
    })
  })
router.get('/programming', (req, res) => {
    res.status(200).render('public/layout', {
      page: "programming"
    })
  })
router.get('/gamming', (req, res) => {
    res.status(200).render('public/layout', {
      page: "gamming"
    })
  })
router.get('/launchpad', (req, res) => {
    res.status(200).render('public/layout', {
      page: "launchpad"
    })
  })
router.get('/news', (req, res) => {
    res.status(200).render('public/layout', {
      page: "news"
    })
  })
  module.exports = router
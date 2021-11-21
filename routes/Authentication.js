const express  = require("express")
const router = express.Router();
const user = require("../models/user")


router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))

router.get('/signin', (req, res) => {
  res.status(200).render('../views/public/layout.pug', {
    page: "signin"
  })
})
router.get('/signup', (req, res) => {
  res.status(200).render('../views/public/layout.pug', {
    page: "signup"
  })
})
router.post("/signup", async (req,res)=>{
    try{
    const newuser = user({
        name: req.body.name,
        email : req.body.email,
        password: req.body.password,
        confirm: req.body.confirmpassword
    })
    await newuser.save();
    res.render("../views/public/layout.pug",{
        page: "signin"
    })
    } catch(err){
        res.render(err);
    }
})
module.exports = router;
const express=require('express')
const router=express.Router()
const { Users } = require("../models")
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { ValidateToken } = require('../middleware/AuthMiddleware')

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            email: email,
            password: hash
        }).then(() => {
            res.json({ message: "success" })
        })
            .catch((err) => {
                if (err) {
                    res.status(400).json({
                        error: err
                    })
                }
            })
    })
})
router.get("/all",async(req,res)=>{
    const allUSers=await Users.findAll();
    res.json(allUSers)
})

router.post("/signin", async (req, res) => {

    const { email, password } = req.body

    const user = await Users.findOne({ where: { email: email } })
    if (!user) res.status(400).json({ error: "user not exist" });

    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({ error: "invalid email and password" })
        } else {
            const accessToken = sign({
                email: user.email, id: user.id
            }, "jwtToken");
            res.json({
                token: accessToken,
                email: email,
                id: user.id,
                username:user.username
            })
        }
    })
})

module.exports = router
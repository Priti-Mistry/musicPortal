const express=require('express')
const cors = require('cors')
const db = require('./models')
const { Users } = require("./models")
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const MusicCds = require('./models/MusicCds')
const { ValidateToken } = require('./middleware/AuthMiddleware')
const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    console.log('from get')
})
app.post('/signup', (req, res) => {
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

app.post("/signin", async (req, res) => {

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
                id: user.id
            })
        }
    })
})


app.post('/add/musicCd',ValidateToken, (req, res) => {
    const { album_name, singer, composer_name,launch_date, place, genre,record_label, total_track,duration, format,price} = req.body;
    
        MusicCds.create({
            album_name:album_name,
            singer:singer,
            composer_name:composer_name,
            launch_date:launch_date,
            place:place, 
            genre:genre,
            record_label:record_label, 
            total_track:total_track,
            duration:duration, 
            format:format,
            price:format
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

const port = 5000
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is runnig on port : " + port)
    })
})
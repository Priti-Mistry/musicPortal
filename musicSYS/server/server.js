const express=require('express')
const cors = require('cors')
const db = require('./models')
const musicRouter = require('./routers/MusicCds')


const MusicCds = require('./models/MusicCds')
const { ValidateToken } = require('./middleware/AuthMiddleware')

const userRouter=require('./routers/Users')

const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    console.log('from get')
})

app.use('/users',userRouter)
app.use('/MusicCds',musicRouter)

// app.post('/add/musicCd',ValidateToken, (req, res) => {
//     const { album_name, singer, composer_name,launch_date, place, genre,record_label, total_track,duration, format,price} = req.body;
    
//         MusicCds.create({
//             album_name:album_name,
//             singer:singer,
//             composer_name:composer_name,
//             launch_date:launch_date,
//             place:place, 
//             genre:genre,
//             record_label:record_label, 
//             total_track:total_track,
//             duration:duration, 
//             format:format,
//             price:format
//         }).then(() => {
//             res.json({ message: "success" })
//         })
//             .catch((err) => {
//                 if (err) {
//                     res.status(400).json({
//                         error: err
//                     })
//                 }
//             })
    
// })

const port = 5000
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is runnig on port : " + port)
    })
})
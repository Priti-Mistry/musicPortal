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

const port = 5000
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is runnig on port : " + port)
    })
})

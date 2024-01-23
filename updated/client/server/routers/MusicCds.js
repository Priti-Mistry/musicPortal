const express=require('express')
const router=express.Router()
const {MusicCds} = require('../models')
const {validateToken} = require('../middleware/AuthMiddleware')

router.post('/add',validateToken, (req, res) => {
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
            price:price,
            UserId:req.user.id
        }).then(() => {
            res.json({ message: "success" })
        }).catch((err) => {
                if (err) {
                    res.status(400).json({
                        error: err
                    })
                }
            })
})

router.get('/all',async(req,res)=>{
    const listMusicCds=await MusicCds.findAll();
    res.json(listMusicCds)
})

router.get('/bySeller/Id/:id',async(req,res)=>{
    const id=req.params.id;
    const sellerData=await MusicCds.findAll({where :{UserId:id}})
    res.json(sellerData)
})

router.delete('/bySeller/Id/:id',async(req,res)=>{
    const id=req.params.id;
    await MusicCds.destroy({
        where:{
            id:id
        }
    }).then(res.json('deleted successfully.'))
})

router.put('/bySeller/Id/:id',validateToken,async(req,res)=>{
    const musicCdId=req.params.id;
    const { album_name, singer, composer_name,launch_date, place, genre,record_label, total_track,duration, format,price} = req.body;

    MusicCds.update({
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
        price:price,
        UserId:req.user.id
    },{
        where:{id:musicCdId}
    }).then(
        res.json('data updated successfully.')
    ).catch(
        (err)=>{
            res.json({
                error:err
            })
        }
    )

})

module.exports = router
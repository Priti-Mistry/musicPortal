const express = require('express')
const router = express.Router()
const { MusicCds,Users } = require('../models')
const { validateToken } = require('../middleware/AuthMiddleware')

const handleErrors = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  };

router.post('/add', validateToken, async (req, res) => {
    try {
        const {
            album_name, singer, composer_name, launch_date, place,
            genre, record_label, total_track, duration, format, price
        } = req.body;

        const newMusicCd = await MusicCds.create({
            album_name, singer, composer_name, launch_date, place,
            genre, record_label, total_track, duration, format, price,
            UserId: req.user.id
        });

        res.json(newMusicCd);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const listMusicCds = await MusicCds.findAll();
        res.json(listMusicCds);
    } catch (error) {
        handleErrors(res, error);
    }
});

router.get('/bySeller/Id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sellerData = await MusicCds.findAll({ where: { UserId: id } });
        res.json(sellerData);
    } catch (error) {
        handleErrors(res, error);
    }
});

router.get('/oneMusic/Id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const singleData = await MusicCds.findAll({ where: { id: id } });
        res.json(singleData);
    } catch (error) {
        handleErrors(res, error);
    }
});

router.delete('/bySeller/Id/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const existingRecord = await MusicCds.findByPk(id);

        if (!existingRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        const result = await MusicCds.destroy({
            where: { id: id }
        });

        res.json({ message: 'Record deleted successfully', result });
    } catch (error) {
        handleErrors(res, error);
    }
});

router.put('/bySeller/Id/:id', validateToken, async (req, res) => {
    const musicCdId = req.params.id;
    const { album_name, singer, composer_name, launch_date, place, genre, record_label, total_track, duration, format, price } = req.body;

    MusicCds.update({
        album_name: album_name,
        singer: singer,
        composer_name: composer_name,
        launch_date: launch_date,
        place: place,
        genre: genre,
        record_label: record_label,
        total_track: total_track,
        duration: duration,
        format: format,
        price: price,
        UserId: req.user.id
    }, {
        where: { id: musicCdId }
    }).then(
        res.json(req.body)
    ).catch(
        (err) => {
            res.json({
                error: err
            })
        }
    )

})

router.get('/allWithUsers', async (req, res) => { 
    try { 
        const musicCdsWithUsers = await MusicCds.findAll(); 
        const Sellers=await Users.findAll()
        res.json({
            musicDetails:musicCdsWithUsers,
            sellers:Sellers
        }); 
    } catch (error) { 
        handleErrors(res, error); 
    } 
});

module.exports = router
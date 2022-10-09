const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
import Tracks from '../models/Track';

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (request, response) => {
    const tracks = await Tracks.find({userId: req.user._id});
    res.send(tracks);
});

router.post('/tracks', async (request, response) => {
    const {name, locations} = request.body;
    if (!name || !locations) {
        return res.status(422).send({error: "You must provide a name and locations"});
    }
    try {
        const track = new Tracks({name, locations, userId: req.user._id})
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({error: err.message});
    }
})

export {router as trackRouter};

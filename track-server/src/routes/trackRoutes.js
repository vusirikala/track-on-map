import express from 'express';
import mongoose from 'mongoose';
import requireAuth from '../middlewares/requireAuth.js';
import Tracks from '../models/Track.js';

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (request, response) => {
    const tracks = await Tracks.find({userId: request.user._id});
    response.send(tracks);
});

router.post('/tracks', async (request, response) => {
    const {name, locations} = request.body;
    if (!name || !locations) {
        return response.status(422).send({error: "You must provide a name and locations"});
    }
    try {
        const track = new Tracks({name, locations, userId: request.user._id})
        await track.save();
        response.send(track);
    } catch (err) {
        response.status(422).send({error: err.message});
    }
})

export {router as trackRouter};

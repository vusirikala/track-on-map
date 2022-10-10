import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Users from '../models/User.js';

function requireAuth (req, res, next) {
    const {authorization} = req.headers;
    //authorization === Bearer adsfwerwfaflskwek
    if (!authorization) {
        return res.status(401).send({error: 'You must be logged in.'});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({error: 'You must be logged in'})
        }
        const {userId} = payload;
        const user = await Users.findById(userId);
        req.user = user;
        next();
    })
}

export default requireAuth;
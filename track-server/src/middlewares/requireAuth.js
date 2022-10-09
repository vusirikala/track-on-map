const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
import Users from '../models/User';

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
        const user = await User.findById(userId);
        req.user = user;
        next();
    })
}

export default requireAuth;
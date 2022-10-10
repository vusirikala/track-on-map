import express from 'express';
import jwt from 'jsonwebtoken';
import Users from '../models/User.js';

const router = express.Router();

router.post('/signup', async (request, response) => {
    const {email, password} = request.body;
    
    try {
        const user = new Users({email, password});
        await user.save();
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        response.send({token});

    } catch (err) {
        response.status(422).send(err.message); 
    }
})


router.post('/signin', async (request, response) => {
    const {email, password} = request.body;
    if (!email || !password) {
        return response.status(422).send({error: 'Must provide email and password'})
    }
    const user = await Users.findOne({email: email});
    if (!user) {
        return response.status(422).send({error: 'Invalid password or email'});
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY')
        response.send({token})
    } catch (err) {
        return response.status(422).send({error: 'Invalid password or email'})
    }
})

export {router as authRouter};


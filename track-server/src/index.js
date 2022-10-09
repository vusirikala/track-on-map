const express = require('express');
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { authRouter } from './routes/authRoutes';
import requireAuth from './middlewares/requireAuth';
import { trackRouter } from './routes/trackRoutes';

const app = express();
app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouter);


app.get('/', (req, res) => {
    res.send('Hi there!')  
})

const start = async () =>
{
    try {
        const mongoUri = "mongodb://127.0.0.1:27017/tracks";
        await mongoose.connect(mongoUri);


        app.listen(5000, () => {
            console.log('Listening on port 5000');
        })
    } catch (err) {
        console.error(err);
    }
}

await start();
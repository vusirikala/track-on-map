import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { authRouter } from './routes/authRoutes.js';
import requireAuth from './middlewares/requireAuth.js';
import { trackRouter } from './routes/trackRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouter);


app.get('/', requireAuth, (req, res) => {
    res.send('Hi there!')  
})

const start = async () =>
{
    try {
        const mongoUri = "mongodb://127.0.0.1:27017/tracks";
        await mongoose.connect(mongoUri);


        app.listen(5500, () => {
            console.log('Listening on port 5500');
        })
    } catch (err) {
        console.error(err);
    }
}

await start();
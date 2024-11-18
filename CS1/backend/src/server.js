import express from 'express'
import {apiRouter, publicRouter} from './routes/index.js'
import { rateLimit } from 'express-rate-limit'
import errorMessage from "./utils/errorMessage.js"
import timeStamp from "./middleware/timeStamp.js"
import deleteExpiredLinks from "./utils/deleteExpiredLinks.js";
import cron from 'node-cron';
import {dbSync} from "./models/index.js";
import cors from 'cors';

const app = express()
const port = 4000

await dbSync();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(timeStamp);

app.get('/ping', (req, res) => {
    res.send('ping');
});

app.use('/api', apiRouter);
app.use('/', publicRouter);

app.listen(port, () => {
    console.log(`CS1 app listening on port ${port}`);
})

cron.schedule('0 0 * * *', deleteExpiredLinks);

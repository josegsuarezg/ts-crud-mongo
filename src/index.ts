import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {router} from './routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(router);


app.listen(PORT, (): void => console.log(`Server listening on port ${PORT}`))
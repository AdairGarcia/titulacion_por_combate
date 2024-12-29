import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouter from './routes/auth.routes.js';
import formsRouter from './routes/forms.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRouter);
app.use('/api/forms', formsRouter);


export default app;
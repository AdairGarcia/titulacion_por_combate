import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth.routes.js';
import formsRouter from './routes/forms.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', authRouter);
app.use('/api/forms', formsRouter);


export default app;
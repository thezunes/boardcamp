import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import express from 'express';

const app=express();
dotenv.config();
app.use(cors())
app.use(json())
app.use(router)

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server listening on ${PORT} PORT`));
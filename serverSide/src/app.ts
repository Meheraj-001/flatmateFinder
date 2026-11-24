import express, { type Express, type Request, type Response } from 'express';
import UserRouter from './Route/UserRouter';


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",UserRouter);

export default app;
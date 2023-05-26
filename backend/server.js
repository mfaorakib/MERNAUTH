import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT || 8000;
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDb from './config/db.js';
const app = express();

connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.get('/', (req,res) => res.send("Server is Ready"));
app.use(notFound);
app.use(errorHandler)
app.listen(port, () => console.log(`Server Started is port Number ${port}`))

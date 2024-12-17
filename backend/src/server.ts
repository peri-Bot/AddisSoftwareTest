import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import songRoutes from './routes/songRoutes';
import statsRoutes from './routes/statsRoutes';
import errorHandler from './middleware/errorMiddleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/songs', songRoutes);
app.use('/api/stats', statsRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

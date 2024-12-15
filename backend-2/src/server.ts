import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI as string;
mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import express, { Express } from 'express';
import cors from 'cors';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Connected to PostgreSQL");
    })
    .catch((error) => {
        console.error("PostgreSQL connection error:", error);
    });

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
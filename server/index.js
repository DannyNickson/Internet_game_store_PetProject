import express from "express";
import dotenv from 'dotenv';
import sequelize from './db.config.js'
import models from './models/models.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

const start = async () => {
    console.log();
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()

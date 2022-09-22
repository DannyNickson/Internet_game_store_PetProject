import express from "express";
import dotenv from 'dotenv';
import sequelize from './db.config.js'
import * as model from './models/models.js'
import cors from 'cors'
import router from './routes/index.js'



dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api',router)

app.get('/',(req,res)=>{
    res.status(200).json({message:"WORKING!!!"})
})

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

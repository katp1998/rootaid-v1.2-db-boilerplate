import express from 'express';
import connection from './database/connection';
import dotenv from 'dotenv'
import userRoutes from './api/routes/user.routes'

//IMPORTING DOTENV:
dotenv.config();

//GETTING PORT FROM .ENV FILE:
const PORT = process.env.PORT || 3000

const app = express();

//IMPORTING MIDDLEWARE:
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 
//ADDING USER ROUTES:
//app.use("/api/users", userRoutes)

//SYNCING DATABASE:
connection.sync().then(() =>{
    console.log("Database connected successfully");
}).catch((err) =>{
    console.log("Error", err);
    
})

//CONNECTION TO PORT:
app.listen(PORT, () => {
    console.log(`This application is listening on port ${PORT}`)
})


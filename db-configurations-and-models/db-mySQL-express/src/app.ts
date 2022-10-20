import { json, urlencoded } from 'body-parser';
import express from 'express';
import connection from './database/connection';
import { config } from 'dotenv';
//import userRoutes from './api/routes/userRoutes'

//GETTING PORT FROM .ENV FILE:
const PORT = process.env.PORT || 3000

const app = express();

//IMPORTING EXPRESS MIDDLEWARE:
app.use(json());
app.use(urlencoded({extended:true}))

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


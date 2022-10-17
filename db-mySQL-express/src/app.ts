import { json, urlencoded } from 'body-parser';
import express from 'express';
import connection from './database/config';
import userRoutes from './routes/userRoutes'

const app = express();

app.use(json());
app.use(urlencoded({extended:true}))

app.use("/api/users", userRoutes)

app.use((
    err: Error,
    rq: express.Request,
    rs: express.Response,
    next: express.NextFunction
) => {
    //server error:
    rs.status(500).json({message: err.message})
})

connection.sync().then(() =>{
    console.log("Database connected successfully");
}).catch((err) =>{
    console.log("Error", err);
    
})

app.listen(3000)


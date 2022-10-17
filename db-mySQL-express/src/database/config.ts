import { Sequelize } from "sequelize-typescript";
import { User } from "./sql/userQueries";

const connection = new Sequelize({
    dialect:"mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "users",
    logging: false,
    models:[User]
})

export default connection
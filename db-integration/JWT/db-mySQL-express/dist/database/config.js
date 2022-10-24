"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const userQueries_1 = require("./sql/userQueries");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "users",
    logging: false,
    models: [userQueries_1.User]
});
exports.default = connection;

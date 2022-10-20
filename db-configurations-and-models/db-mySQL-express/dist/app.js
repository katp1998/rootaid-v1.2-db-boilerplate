"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./database/connection"));
//import userRoutes from './api/routes/userRoutes'
//GETTING PORT FROM .ENV FILE:
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
//IMPORTING EXPRESS MIDDLEWARE:
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
//ADDING USER ROUTES:
//app.use("/api/users", userRoutes)
//SYNCING DATABASE:
connection_1.default.sync().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log("Error", err);
});
//CONNECTION TO PORT:
app.listen(PORT, () => {
    console.log(`This application is listening on port ${PORT}`);
});

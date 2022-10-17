"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./database/config"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/api/users", userRoutes_1.default);
app.use((err, rq, rs, next) => {
    //server error:
    rs.status(500).json({ message: err.message });
});
config_1.default.sync().then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log("Error", err);
});
app.listen(3000);

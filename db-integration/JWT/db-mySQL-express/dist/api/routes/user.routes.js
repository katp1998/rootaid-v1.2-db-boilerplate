"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const auth_middleware_1 = require("../middleware/auth.middleware");
const userRouter = express_1.default.Router();
userRouter.post('/register', user_controllers_1.registerUser);
userRouter.post('/login', user_controllers_1.loginUser);
// userRouter.post('/token',auth,protectedRoute)
//add test protected route 
userRouter.get('/private', auth_middleware_1.auth, user_controllers_1.protectedRoute);
exports.default = userRouter;

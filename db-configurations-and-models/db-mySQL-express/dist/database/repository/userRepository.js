"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findUser = exports.loginUser = exports.createUser = void 0;
const user_models_1 = require("../models/user.models");
const bcrypt_1 = __importDefault(require("bcrypt"));
//@desc CREATING USER
//@route POST /api/v1/auth
const createUser = (rq, rs) => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_models_1.User.build({ name, email, password });
    try {
        //check for required user with the same email
        const existingUser = yield user_models_1.User.findOne({ where: { email } });
        if (existingUser) {
            return rs.json({ message: 'User exists' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_models_1.User.create({
            name,
            email,
            password: hashedPassword,
        });
        rs.json({
            status: 'success',
            user: {
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (error) {
        rs.status(500).json({ status: 'error', messsage: "User creation unsuccessful" });
    }
});
exports.createUser = createUser;
//@desc login user
//@route GET /api/v1/auth/login
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        //check for required user with the same email
        const user = yield user_models_1.User.findOne({ where: { email } });
        if (!user) {
            return res.json({ status: 'error', error: 'User does not exist' });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign({
                name: user.name,
                email: user.email,
            }, JWT_SECRET);
            return res.json({ status: 'success', user: token });
        }
        else {
            return res.json({ status: 'error', user: false });
        }
    }
    catch (err) {
        logger.error(err);
        res.status(500).json({
            success: false,
            error: err,
        });
    }
});
exports.loginUser = loginUser;
//@desc forget password
//@route POST /api/v1/auth/forgetpassword/:email
const findUser = ({ email }) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
});
exports.findUser = findUser;
//@desc update user
//@route PUT /api/v1/auth/:id
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const { email, password } = req.body;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_models_1.User.update({
            email,
            password: hashedPassword,
        }, { where: { id: userId } });
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid user' });
        }
        res.json({ status: 'success', user: user });
    }
    catch (error) {
        logger.error(error);
        res.status(500).json({
            success: false,
            error: error,
        });
    }
});
exports.updateUser = updateUser;
//@desc delete user
//@route DELETE /api/v1/auth/:id
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const user = yield user_models_1.User.destroy({ where: { id: userId } });
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid user' });
        }
        res.json({ status: 'success', user: user });
    }
    catch (error) {
        logger.error(error);
        res.status(500).json({
            success: false,
            error: error,
        });
    }
});
exports.deleteUser = deleteUser;

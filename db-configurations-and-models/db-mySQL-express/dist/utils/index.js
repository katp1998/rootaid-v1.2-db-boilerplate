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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const APP_SECRET = "secretapp";
module.exports.GenerateSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.genSalt();
}),
    module.exports.GeneratePassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
        return yield bcrypt_1.default.hash(password, salt);
    });
module.exports.ValidatePassword = (enteredPassword, savedPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield bcrypt_1.default.hash(enteredPassword, salt)) === savedPassword;
});
module.exports.GenerateSignature = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jsonwebtoken_1.default.sign(payload, APP_SECRET, { expiresIn: '1d' });
}),
    module.exports.FormateData = (data) => {
        if (data) {
            return { data };
        }
        else {
            throw new Error('Data Not found!');
        }
    };

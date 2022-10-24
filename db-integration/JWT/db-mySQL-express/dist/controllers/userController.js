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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const userQueries_1 = require("../database/sql/userQueries");
//CREATING USER
const createUser = (rq, rs, next) => __awaiter(void 0, void 0, void 0, function* () {
    //CHECK IF USER ALREADY EXISTS
    //IF USER DOES NOT ALREADY EXIST
    var user = yield userQueries_1.User.create(Object.assign({}, rq.body));
    return rs.status(200).json({ message: "User successfully created", data: user });
});
exports.createUser = createUser;
//LOGIN USER
const loginUser = (rq, rs) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = rq.params;
});
exports.loginUser = loginUser;

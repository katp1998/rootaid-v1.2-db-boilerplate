import { RequestHandler } from "express";

import {User} from '../database/sql/userQueries';

//CREATING USER
export const createUser: RequestHandler = async (rq, rs, next) => {
    //CHECK IF USER ALREADY EXISTS
    

    //IF USER DOES NOT ALREADY EXIST
    var user = await User.create({...rq.body});
    return rs.status(200).json({message: "User successfully created", data: user})
}

//LOGIN USER
export const loginUser: RequestHandler = async(rq,rs)=>{
    const {id} = rq.params;

}


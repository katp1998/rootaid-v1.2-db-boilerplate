import { Request, Response , NextFunction } from "express"
import {signUp, logIn} from '../../services/user.service'
import { JwtPayload } from "jsonwebtoken";
export interface CustomRequest extends Request {
    user: any | JwtPayload;
   }

//@ROUTE: /api/users/register
export const registerUser = async (req :Request,res : Response,next : NextFunction) =>{
        try {
            const {name,email,password} = req.body
            const data = await signUp({name,email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }

//@ROUTE: /api/users/login
export const loginUser = async (req : Request,res : Response,next : NextFunction) =>{
        try {
            const {email,password} = req.body
            const data = await logIn({email,password})
            return res.json(data)
        } catch (error) {
            next(error)
        }
    }


export const protectedRoute = async (req : Request,res : Response) => {
    try {
        res.status(200).json({
            message: "successful protected route",
            user : (req as CustomRequest).user
        })
    } catch (error) {
        res.status(500).json({
            error : error
        })
    }
}
//importing userRepository 
import userRepository from '../database/repository/userRepository'

//importing the hashed password methods
import { FormateData, GeneratePassword, GenerateSalt, GenerateSignature, ValidatePassword } from '../utils/index';

const userService = {
    loginUser:async (userInputs: { email: string; password: string }) => {
        //reading userInputs:
        const{email,password} = userInputs
        
        try {
            //get if user already exists:
            const exisitngUser = await 

            if(exisitngUser){
                const validatePassword = await V
            }



        } catch (error) {
            
        }
    }
}
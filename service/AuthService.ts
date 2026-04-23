import axios from "axios";
import { SignUp } from "../components/auth/signUp";
const url="https://jsonplaceholder.typicode.com/posts/1"

export const SignInProcess=async (signIn:any)=>{
    try{
        const response=axios.post(
            `${url}/signin`,
            signIn
        );
        console.log(response.data.token);
        return (await response).data.token;
    }catch(err){
        console.log(err);

    }
}
export const SignUpProcess=async(signUp:any)=>{
    try{
       const response=await axios.post(
            `${url}/signUp`,
            signUp
        );
        console.log(response.data.token);
        return response.data.token;
        }catch(err){
            console.log(err);
    }
}
        
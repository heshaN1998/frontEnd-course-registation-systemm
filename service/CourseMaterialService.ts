import axios from "axios";

const baseURL="https://jsonplaceholder.typicode.com/posts/1";
export const getCourseMaterialData= async ()=>{
try{
   const response= await axios.get(baseURL)
   return response.data;
}catch(err){
console.error(err);
}
}
export const updateCourseMaterialData=async (material:FormData)=>{
    try{
        await axios.patch(`${baseURL}`,material)
    }catch(er){
        console.log(er)
    }
}
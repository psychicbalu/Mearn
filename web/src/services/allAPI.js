import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register



export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}


//Login


export const  loginAPI= async (user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
}


//add project

export const AddProjectApi=async (reqbody,reqheader)=>{
    return await commonAPI('POST',`${BASE_URL}/project/add,reqbody,reqheader`)
}
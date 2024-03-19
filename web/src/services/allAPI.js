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
    return await commonAPI('POST',`${BASE_URL}/projects/add`,reqbody,reqheader)
}

//gethomeprojects

export const homeProjectsAPI= async(reqBody,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/homeprojects`)
}
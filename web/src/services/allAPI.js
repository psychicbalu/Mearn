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

export const AddProjectApi = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/projects/add`,reqBody,reqHeader)
}

//gethomeprojects

export const homeProjectsAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/homeprojects`,"","")
}

//get all  Projects

export const allProjectAPI = async(searchkey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search/${searchkey}`,"",reqHeader)
}
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
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchkey}`,"",reqHeader)
}


//userproject

export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allprojects`,"",reqHeader)
}


// edit project

export const editProjectAPI = async (projectid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectid}`,reqBody,reqHeader)
}

//delete project

export const deleteProjectAPI = async (projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)
}


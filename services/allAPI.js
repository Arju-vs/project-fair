import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVER_BASE_URL}/register`,reqBody)
}

// loginAPI
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVER_BASE_URL}/login`,reqBody)
}

// addProjectAPI
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST", `${SERVER_BASE_URL}/add-Project`,reqBody,reqHeader)
}

// home-projects
export const homeProjectsAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_BASE_URL}/home-Projects`,{})
}

// user-projects
export const userProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVER_BASE_URL}/user-Projects`,{},reqHeader)
}

// all-projects
export const allProjectsAPI = async (reqHeader,searchKey)=>{
    // query parameter of url - ?search=${searchKey} & query stored in 'search'
    return await commonAPI("GET", `${SERVER_BASE_URL}/all-Projects?search=${searchKey}`,{},reqHeader)
}
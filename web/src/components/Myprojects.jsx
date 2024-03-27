import React, { useState, useContext, useEffect } from 'react'
import AddProjects from './AddProjects'
import { userProjectAPI , deleteProjectAPI } from '../services/allAPI'
import { addProjectResponseContext , editProjectResponseContext } from './context/ContextShare'
import { Alert } from 'react-bootstrap'
import EditProject from './EditeProject'



function MyProjects() {
  const [userProjects,setUserProjects]= useState([])
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const {editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)

  const getuserproject = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Barer ${token}`
      }
      const result = await userProjectAPI(reqHeader)
      if (result.status === 200) {
        setUserProjects(result.data)
        console.log(result.data);
      } else {
        console.log(result);
        console.log(result.response.data);
      }

    }


  }

  useEffect(() => {
    getuserproject()
}, [addProjectResponse,editProjectResponse]);

const handleDelete = async(id)=>{
  const token = sessionStorage.getItem("token")
  const reqHeader = {
    "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
  }
  const result = await deleteProjectAPI(id,reqHeader)
  if(result.status===200){
    // page reload
    getuserproject()
  }else{
    alert(result.response.data)
  }
}

  

  return (
    <div className='card shadow p-3 mt-3'>
      <div className="d-flex">
        <h2>My Projects</h2>
        <div className="ms-auto">
          <AddProjects />
        </div>
      </div>
      {
      addProjectResponse.title?<Alert className='bg-success' dismissible><span className='text-danger fw-bolder'> 
      {addProjectResponse.title} Project added successfully</span></Alert>:null
     }

      <div className="mt-4">
        {/* collection of projects */}
        {userProjects?.length > 0 ? userProjects.map(project => (
          <div className=" d-flex align-items-center rounded p-2">
            <h5>{project.title}</h5>
            <div className="icon ms-auto">
              {/* <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
               */}
               <EditProject project={project}/>
              <button onClick={project.github} className='btn'><i class="fa-brands fa-github"></i></button>
              
              <button onClick={()=>handleDelete(project._id)}className='btn'><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        )) : <p className="text-danger fw-bolder fs-5">No Projects Uploaded Yer !!!</p>}

        
        {/* <div className="border d-flex align-items-center rounded p-2">
          <h5>Project Title</h5>
          <div className="icon ms-auto">
            <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
            <button className='btn'><i class="fa-brands fa-github"></i></button>
            <button className='btn'><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <p className="text-danger fw-bolder fs-5">No Projects Uploaded Yer !!!</p> */}
      </div>

    </div>
  )
}

export default MyProjects
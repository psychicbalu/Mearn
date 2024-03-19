import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectAPI } from '../services/allAPI'


function Projects() {

  const [allprojects,setAllProjects]=useState([])

  const [searchkey,setSearchKey]=useState("")

  const getAllProject= async ()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Barer ${token}`
      }

      const result=await allProjectAPI(searchkey,reqHeader)
      if(result.status==200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  console.log(allprojects);
  useEffect(()=>{
    getAllProject()
  },[searchkey])



  return (
    <>
      <Header/>
     <div style={{marginTop:'100px'}} className='projects'>
      <h1 className='text-center mb-5'>All Projects</h1>
      <div className='d-flex justify-content-center w-100'>
        <div className='d-flex border w-50 rounded mb-3'>
          <input type="text" className='form-control'  placeholder='search project by technologies' onChange={e=>setSearchKey(e.target.value)}/>
          <i style={{margin:'10px'}} class="fa-solid fa-magnifying-glass"></i>

        </div>

      </div>
      <Row>

{
  allprojects?.length>0?allprojects.map(project=>(

    <Col className='m-2'>
    <ProjectCard project={project}/>
    </Col>

  )):<p>Please Login</p>
}

</Row>

     </div>
    </>
  )
}

export default Projects
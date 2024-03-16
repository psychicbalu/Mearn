import React from 'react'
import '../components/Header'
import Header from '../components/Header'

function Projects() {
  return (
    <div>
         <Header/>
     <div style={{marginTop:"100px"}} className='projects'> 
     <h1 className='text-center mb-5'>All Projects</h1>
     <div className='d-flex  justify-content-center align-items w-100'>
        <div className='d-flex border w-50 rounded mb-3'>
            <input type="text" className='form-control' placeholder='Search projects by technologies' />
            <i style={{marginLeft:'10px', marginTop:"20px", width:"20px"}} class="fa-solid fa-magnifying-glass fa-lg"></i>

        </div>

     </div>

     </div>
     
    </div>
  )
}

export default Projects
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import '../pages/home.css'
import animationData from '../components/assets/homepage.json';
import MovingComponent from 'react-moving-text'
import { useEffect } from 'react'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};




function Home() {

  const[loggedin,setLoggedin]= useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token"))
        {
            setLoggedin(true)
        }
        else{
            setLoggedin(false)
        }
        
    },[])

  const letters = ['Explore', 'Projects'];
  
  return (
    <>
    
    <div style={{width:'100%', height:'100vh' ,backgroundColor:"black" }} className= 'container-fluid  '>
      
        <Row className="align-items-center p-5">
            <Col sm={12} md={6}>
            <h1 className='fw-bolder '><i class="fa-solid fa-list-check me-2"></i>Project-Fair</h1>  
            <p className='align-items-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas vel rerum quia sapiente, totam in doloremque quasi! Deleniti earum quisquam nobis. Omnis ab suscipit esse vitae hic a officiis?</p>          
           
           { loggedin?
            <Link to={'/Dashboard'} className='btn btn-warning'>Manage Your Projects <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>:
            <Link  to={"/login"} className='btn btn-warning'>   Start To Explore<i class="fa-solid fa-right-long fa-beat ms-2"></i>    </Link>
            }
            </Col>
            <Col sm={12} md={6}>
            <div style={{ width: '100%' }}>
            <Lottie 
	    options={defaultOptions}
        height={600}
        width={600}
      />
      </div>
            </Col>

        </Row>


    </div>

    <div style={{backgroundColor:"black"}} className='all-projects'>
    <h2 className='text-center text-danger' style={{marginBottom: '-122px',display: 'flex', flexDirection: 'column'}}> 
    {letters.map((letter, index) => (
        <MovingComponent
          key={index} // Ensure each component has a unique key
          type="shadow"
          duration="1000ms"
          delay={`${index * 400}ms`} // Corrected the delay calculation
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="forwards"
        >
          {letter}
        </MovingComponent>
      ))}  </h2>
        <marquee scrollAmount={20}>

        <Row >
          <Col  sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>

        </Row>

        </marquee>
       
      <div  className='text-center'> <Link to={'/projects'} >View More Projects</Link></div>
      
    </div>
      
    </>
  )
}

export default Home

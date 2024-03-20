import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {  // added to clear the session storage when logout button is clicked

  
  function clearInterval(){
    if(sessionStorage.getItem("token")){
      sessionStorage.clear();

    }
  }
 
  
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand >
            <Link style={{textDecoration:'none'}} to={'/'}><i class="fa-solid fa-list-check me-2" style={{color:'green'}}></i> </Link>
            ProjectFair
          </Navbar.Brand  >
          {
            insideDashboard && 
            //  <button className='btn btn-danger' onClick={clearInterval} >Logout</button>
             <Link to={'/'}><button className='btn btn-danger' onClick={clearInterval} >Logout</button></Link>  // added a link to the logout button
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
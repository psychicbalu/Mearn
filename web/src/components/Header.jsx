import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
    <div>
      <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
            <Link style={{textDecoration:'none'}} to={'/'}><i class="fa-solid fa-list-check me-2" style={{color:'green'}}></i> </Link>
            ProjectFair
          </Navbar.Brand>
          {
            insideDashboard && 
            <button className='btn btn-danger'>Logout</button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
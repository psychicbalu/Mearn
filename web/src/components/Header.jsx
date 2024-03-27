import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { tokenAuthorizationContext } from '../components/context/TokenAuth';



function Header({insideDashboard}) {  // added to clear the session storage when logout button is clicked
  const navigate = useNavigate();
  const {isAuthenticated, setIsAuthenticated} = useContext(tokenAuthorizationContext)
  
  function clearInterval(){
    if(sessionStorage.getItem("token")){
      sessionStorage.clear();
      setIsAuthenticated(false);
      navigate('/');
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
             <button className='btn btn-danger' onClick={clearInterval} >Logout</button>
           //  <Link to={'/'}><button className='btn btn-danger' onClick={clearInterval} >Logout</button></Link>  // added a link to the logout button
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
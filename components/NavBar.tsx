import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthProvider';
export const NavBar =()=>{
    const { isAuthenticated,logout}=useAuth();
    const navigate=useNavigate();
   const handleOnLogout=()=>{
    logout()
    navigate("/signin")
   }
    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {isAuthenticated? (      
            <>  <Nav.Link as={Link} to="/coursematerial">Course Material</Nav.Link>
            <Nav.Link as={Link} to="/course">Course</Nav.Link>
            <button variant="danger" onClick={handleOnLogout}>LogOut</button>
            </> ):(    <>        <Nav.Link as={Link} to="/signin">Signin</Nav.Link>
            <Nav.Link as={Link} to="/register">Signin</Nav.Link>
            </>)}
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">

   
          </Nav>
        </Container>
      </Navbar>
      <br /></>);
}
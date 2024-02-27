import React from 'react'
import { Nav,Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';


export default function AdminBar() {
    const navigate = useNavigate()

    function logOut(){
        localStorage.clear();
        navigate('/login')

    }
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/admin"}>Home</Nav.Link>
            <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/events"}>Events</Nav.Link>
            <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/add_event"}>Add Event</Nav.Link>
            <Nav.Link style={{color:"#0496ff"}} onClick={logOut}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

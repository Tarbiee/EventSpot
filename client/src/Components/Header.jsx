import React from 'react'
import { Nav,Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate()

    function logOut(){
        localStorage.clear();
        navigate('/login')

    }
  return (
    <div>
        <Navbar style={{backgroundColor:'#faedcd'}}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link style={{color:"brown"}} as={Link} to={"/homepage"}>Home</Nav.Link>
            <Nav.Link style={{color:"brown"}} as={Link} to={"/events_card"}>Events</Nav.Link>
            <Nav.Link style={{color:"brown"}} onClick={logOut}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

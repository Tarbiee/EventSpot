import React from 'react'
import { Nav,Navbar, Button } from 'react-bootstrap'
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
          <Navbar.Brand href="#home">
          <span className="brand-initial">E</span>ventSpot
          </Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link style={{color:"#7f4f24"}} as={Link} to={"/homepage"}>Home</Nav.Link>
            <Nav.Link style={{color:"#7f4f24"}} as={Link} to={"/events_card"}>Events</Nav.Link>
            <Nav.Link style={{color:"#7f4f24"}} as={Link} to={"/reservations"}>Reserve</Nav.Link>
            <Button variant="outline-light" style={{ backgroundColor: '#7f4f24' }} onClick={logOut}>
            Log Out
          </Button>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

import React from 'react'
import { Nav,Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
            <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/events_list"}>Events</Nav.Link>
            <Nav.Link style={{color:"#0496ff"}} as={Link} to={"/add_event"}>Add Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import Header from './Header';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function EventsCard() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/events')
        .then(res => res.json())
        .then((data) => setEvents(data))
    },[])
  return (
    <div>
        <Header/>
        <Container style={{padding: '1rem'}}>
            <br></br>
            <br></br>
            <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
            {events.map((event) => (
                <Col key={event.event_id} xs={6} sm={6} md={3} lg={3}>
                <Card 
                style={{ marginBottom: '1rem', height: 'auto' ,overflow:"hidden", borderRadius:"30px"}}>
                    <Card.Img variant="top" src={"http://localhost:8000/"+event.event_image} style={{height: '9rem'}}/>
                    <Card.Body>
                    <Card.Title style={{fontSize:"16px"}}>Event Name: {event.event_name}</Card.Title>
                    <Card.Text style={{fontSize:"15px"}}>Descrption: {event.event_description}</Card.Text>
                    <Link to={`/events_card/${event.event_id}`}>
                        <Button variant="primary">
                        <FaInfoCircle /> More Info
                        </Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            </Container>
            
    </div>
  )
}

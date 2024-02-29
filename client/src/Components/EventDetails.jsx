import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetails() {
    const [event, setEvent] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/event/${id}`)
            .then(res => res.json())
            .then((data) => setEvent(data))
            .catch(error => console.error('Error fetching event data:', error));
    }, [id]);

    return (
        <div>
            <Header />
            <br />
            {event&& (
               <Container style={{ backgroundColor: '#f2f2f2', height: '200px', textAlign: 'center', paddingTop: '50px',borderRadius:'20px' }}>
               <Row className="justify-content-center mb-4">
                   <Col>
                   
                       <h1>🎉 {event.event_name}</h1>
                   </Col>
               </Row>
               <Row className="justify-content-center">
                   <Col>
                       <h3>📝 {event.event_description}</h3>
                   </Col>
               </Row>
           </Container>
           

            )}
            <br />
            <div className='flex-container'>
                <Container className='image'>
                {event && (
                    <img 
                        src={"http://localhost:8000/" + event.event_image} 
                        alt="Event" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    )}
                </Container>
                {event && (
                <Container className='content' style={{  backgroundColor: '#f2f2f2' }}>
                    <br></br>
                    <br></br>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>📍 Location:</strong> {event.event_location}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>📅 Organizers:</strong> {event.event_organizer}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>🎉 Category:</strong> {event.event_category}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>🎟️ Capacity:</strong> {event.event_capacity}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>💲 Regular Ticket Price:</strong> {event.regular_ticket_price}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>💎 VIP Ticket Price:</strong> {event.vip_ticket_price || 'N/A'}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>🎟️ Available Regular Tickets:</strong> {event.available_regular_tickets}
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col className="text-center">
                        <strong style={{ color: 'brown' }}>🎟️ Available VIP Tickets:</strong> {event.available_vip_tickets}
                    </Col>
                </Row>
            </Container>
                )}
                
            </div>
            <br></br>
            <div className="text-center">
                <Link to="/reservations">
                <Button style={{ backgroundColor: 'brown' }}>Make Reservations</Button>
                </Link>
            </div>
        </div>
    );
}

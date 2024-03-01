import React from 'react'
import emailjs from 'emailjs-com';
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../images/reserve2.svg"


export default function Reservation() {
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const numberOfTickets = parseInt(event.target.elements.number.value);
        if (numberOfTickets > 5) {
            alert("You cannot reserve more than five tickets.");
            return;
        }
        emailjs.sendForm('service_k2skjvn', 'template_oey2nl4', event.target, 'NfOil_-_c0ykb4mdP')
          .then((result) => {
            alert("Message sent");
            console.log('Email sent successfully:', result.text);
          }, (error) => {
            console.error('Error sending email:', error.text);
          });
    };
    
    

  return (
    <div>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-center">
        <h3>Make A Resevation</h3>

        </div>
       
        <div className='reservation'>
        <Container className='image-content'>
        <Row>
        <img style={{height:'100%'}}src={image} alt="resrvation"/>
        </Row>
        </Container>
        <Container className='form'>
        <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="field1" className="form-label">User Name</label>
              <input type="text" className="form-control" name="to_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="field2" className="form-label">User Email</label>
              <input type="text" className="form-control" name="to_email" />
            </div>
            <div className="mb-3">
              <label htmlFor="field3" className="form-label">Event Name</label>
              <input type="text" className="form-control" name="event_name" />
            </div>
            <div className="mb-3">
                <label htmlFor="field3" className="form-label">Ticket Type</label>
                <select className="form-select" name="ticket_type">
                    <option value="Regular">Regular</option>
                    <option value="Vip">VIP</option>
                </select>
                </div>
            <div className="mb-3">
              <label htmlFor="field3" className="form-label">Number of Tickets</label>
              <input type="number" className="form-control" name="number" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#7f4f24', borderColor: '#7f4f24' }}>Submit</button>
          </form>
        </Col>
      </Row>
        </Container>
        </div>
      
    </div>
  )
}

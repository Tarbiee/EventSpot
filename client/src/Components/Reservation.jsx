import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../images/reserve.svg"


export default function Reservation() {
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
          <form>
            <div className="mb-3">
              <label htmlFor="field1" className="form-label">Field 1</label>
              <input type="text" className="form-control" id="field1" />
            </div>
            <div className="mb-3">
              <label htmlFor="field2" className="form-label">Field 2</label>
              <input type="text" className="form-control" id="field2" />
            </div>
            <div className="mb-3">
              <label htmlFor="field3" className="form-label">Field 3</label>
              <input type="text" className="form-control" id="field3" />
            </div>
            <div className="mb-3">
              <label htmlFor="field4" className="form-label">Field 4</label>
              <textarea className="form-control" id="field4" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'brown', borderColor: 'brown' }}>Submit</button>

          </form>
        </Col>
      </Row>
        </Container>
        </div>
      
    </div>
  )
}

import React from 'react';
import hero from "../images/hero.jpg";
import { Col, Row } from 'react-bootstrap';

export default function HeaderFoot() {
  return (
    <div>
      <Row style={{paddingTop:'100px'}}>
        <Col md={6}>
          <div className='h_footer'>
            <div className="h_ftCona">
              <img src={hero} alt="header-footer" className='img-fluid rounded-lg'/>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 className='text-2xl  font-bold'> Explore Events and Book your tickets</h1>
              <br></br>
              <br></br>
              <p className='mb-4 break-normal'>
                At EventSpot, we're passionate about connecting people with unforgettable experiences.
                Whether you're a seasoned event-goer or someone seeking new adventures, we're here to make booking events a seamless and enjoyable experience for you
              </p>
              <p className="mb-4">
                At EventSpot, we're passionate about connecting people with unforgettable experiences.
                Whether you're a seasoned event-goer or someone seeking new adventures, we're here to make booking events a seamless and enjoyable experience for you
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

import React from 'react'
import user from "../home_img.json"
import {Container, Col, Row} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Lottie from 'lottie-react';
import img1 from "../images/img1.svg"
import img4 from "../images/img4.svg"
import img3 from "../images/img3.svg"
import HeaderFoot from './HeaderFoot';

export default function Hero() {
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col>
          <div className='head_left'>
            <span className='h_subTitle'>Explore and Book Events</span>
            <div className='w-75 mt-2 h_title border'>
              <h1 style={{color:'#7f4f24'}}>EventSpot</h1>
              <h1>Convinience</h1>
              <h1>Accessibility</h1>
            </div>
            <p className='text-secondary'>
            Our booking services are designed to make event participation seamless, ensuring everyone can access experiences that resonate with them. From concerts to exhibitions, each booking is an opportunity for personal growth and shared memories.
             Join us as we redefine the event booking experience and bring people together in meaningful ways.

            </p>
            <br></br>
            <br></br>
            <div className='d-flex justify-content align-items-start'>
            <Button style={{ backgroundColor: '#7f4f24', borderColor: '#7f4f24' }}>Explore Events</Button>
            </div>
          </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex
              justify-content-between align-items-center shadow sm-rounded">
                <Lottie animationData={user} className='head_rightImg'/>
              </div>
            </div>
          </Col>
        </Row>
       
        <Row style={{paddingTop:'100px'}}>
          <Col md={4}>
            <div className='border-2  border-gray-200 p-5 rounded-md shadow-lg' >
            <div className='boxContainer d-flex'>
              <div >
                <img src={img3} alt='image' className='img-fluid' style={{width:'90%', objectFit:'cover'}}/>
              </div>
              <div className='w-100'>
                <h5 style={{color: '#3d3f42', fontWeight:'bold'}}>Explore Events</h5>
                <p className='text-secondary'>Explore the diverse range of events available on our platform. From concerts and art exhibitions to sports tournaments and culinary festivals, we offer a variety of options to suit every taste and interest.
                </p>
              </div>
            </div>
            </div>
          </Col>
          <Col md={4}>
          <div className='border-2  border-gray-200 p-5 rounded-md shadow-lg'>
            <div className='boxContainer d-flex'>
              <div className=''>
                <img src={img1} alt='image' className='img-fluid' style={{width:'90%', objectFit:'cover'}}/>
              </div>
              <div className='w-100'>
                <h5 style={{color: '#3d3f42', fontWeight:'bold'}}>Make Reservations</h5>
                <p className='text-secondary'>Make reservations effortlessly with Exploree Events. Browse through a diverse selection of events, choose your preferred option, and secure your spot with just a few clicks.
                </p>
              </div>
            </div>
            </div>
            
          </Col>
          <Col md={4}>
          <div className='border-2  border-gray-200 p-5 rounded-md shadow-lg'>
            <div className='boxContainer d-flex'>
              <div className=''>
                <img src={img4} alt='image' className='img-fluid' style={{width:'90%',objectFit:'cover'}}/>
              </div>
              <div className='w-100'>
                <h5 style={{color: '#3d3f42', fontWeight:'bold'}}>Receive Notification</h5>
                <p className='text-secondary'>After securing your reservation with Exploree Events, expect to receive a confirmation email saying that you have made a reservation.
                This email will serve as confirmation of the booking .
                </p>
              </div>
            </div>
            </div>
          </Col>
        </Row>
        <div className="headerFoot">
          <HeaderFoot/>
        </div>
      </Container>
    </div>
    

  )
}

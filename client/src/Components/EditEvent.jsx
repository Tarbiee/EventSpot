import React,{useEffect,useState} from 'react'
import AdminBar from './AdminBar'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditEvent() {
    const {id} = useParams()
    const [inputs, setInputs] = useState({
        event_name: '',
        event_date: '',
        event_location: '',
        event_organizer: '',
        event_category: '',
        event_capacity: '',
        ticket_type: 'regular',
        ticket_price: '',
        event_description: '',
        event_image:''
    })

    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/api/event/${id}`)
        .then(res => res.json())
        .then((data) => setInputs(data))
    },[id])
  return (
    <div>
        <AdminBar/>
        <h1>Update Event</h1>
        <div className='event-form'>
        <div className='col-sm-6 offset-sm-3'> 
            <Form method="POST" enctype="multipart/form-data">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Event Name" 
                    name="event_name"
                    value={inputs.event_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Control type="datetime-local" placeholder="Event Date"
                     name="event_date"
                     value={inputs.event_date}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Control type="text" placeholder="Event Location" 
                    name="event_location"
                    value={inputs.event_location}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Event Organizer" 
                    name='event_organizer'
                    value={inputs.event_organizer}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control type="text" placeholder="Event Category" 
                    name='event_category'
                    value={inputs.event_category}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCapacity">
                    <Form.Control type="number" placeholder="Event Capacity" 
                    name='event_capacity'
                    value={inputs.event_capacity}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTicketType">
                <Form.Select aria-label="Select Ticket Type"
                name= 'ticket_type'
                value={inputs.ticket_type}
                >
                    <option value="regular">Regular</option>
                    <option value="VIP">VIP</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Ticket Price" 
                     name='ticket_price'
                     value={inputs.ticket_price}
                    />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Event Image:</Form.Label>
                    <img style={{width:'100px'}}src={"http://localhost:8000/"+inputs.event_image}/>
                    <Form.Control type="file" name="event_image" />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formEventDescription">
                <Form.Control
                    as="textarea"
                    rows={3} 
                    placeholder="Event Description"
                    name="event_description"
                    value={inputs.event_description}
                />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Update Event
                </Button>
            </Form>
            <br></br>

            </div>
        </div>
      
    </div>
  )
}

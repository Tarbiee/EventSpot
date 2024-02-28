import React,{useEffect,useState} from 'react'
import AdminBar from './AdminBar'
import { useParams, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function EditEvent() {
    const {id} = useParams()
    const navigate = useNavigate()
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

    function handleImageChange(e) {
        const file = e.target.files[0];
        setInputs({ ...inputs, event_image: file });
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/update/${id}`, inputs)
            .then(function(response) {
                console.log(response.data);
                navigate('/events');
            });
    }
    
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
                    onChange={(e) => setInputs({ ...inputs, event_name: e.target.value })}
                    value={inputs.event_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Control type="datetime-local" placeholder="Event Date"
                     name="event_date"
                     onChange={(e) => setInputs({ ...inputs, event_date: e.target.value })}
                     value={inputs.event_date}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Control type="text" placeholder="Event Location" 
                    name="event_location"
                    onChange={(e) => setInputs({ ...inputs, event_location: e.target.value })}
                    value={inputs.event_location}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Event Organizer" 
                    name='event_organizer'
                    onChange={(e) => setInputs({ ...inputs, event_organizer: e.target.value })}
                    value={inputs.event_organizer}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control type="text" placeholder="Event Category" 
                    name='event_category'
                    onChange={(e) => setInputs({ ...inputs, event_category: e.target.value })}
                    value={inputs.event_category}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCapacity">
                    <Form.Control type="number" placeholder="Event Capacity" 
                    name='event_capacity'
                    onChange={(e) => setInputs({ ...inputs, event_capacity: e.target.value })}
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
                     onChange={(e) => setInputs({ ...inputs, ticket_price: e.target.value })}
                     value={inputs.ticket_price}
                    />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Event Image:</Form.Label>
                    <img style={{width:'100px'}}src={"http://localhost:8000/"+inputs.event_image}/>
                    <Form.Control type="file" name="event_image" onChange={handleImageChange} />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="formEventDescription">
                <Form.Control
                    as="textarea"
                    rows={3} 
                    placeholder="Event Description"
                    name="event_description"
                    value={inputs.event_description}
                    onChange={(e) => setInputs({ ...inputs, event_description: e.target.value })}
                />
                </Form.Group>
                <Button variant="primary" type="submit"  onClick={handleUpdate}>
                    Update Event
                </Button>
            </Form>
            <br></br>

            </div>
        </div>
      
    </div>
  )
}

import React,{useState,useRef} from 'react'
import AdminBar from './AdminBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddEvent() {
    const formRef = useRef(null);
    const [inputs,setInputs] = useState({
            event_name:'',
            event_date: '',
            event_location: '',
            event_organizer: '',
            event_category: '',
            event_capacity: '',
            event_status:'',
            ticket_type: 'regular', 
            ticket_price: '',
            event_image: '',
            event_description: ''

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    }
    const handlefile =(event) =>{
        const file = event.target.files[0];
        setInputs({ ...inputs, event_image: file });
    }
    async function addEvent(event){
        event.preventDefault();
        console.log(inputs)

        const formData = new FormData();
        formData.append('event_name', inputs.event_name);
        formData.append('event_date', inputs.event_date);
        formData.append('event_location', inputs.event_location);
        formData.append('event_organizer', inputs.event_organizer);
        formData.append('event_category', inputs.event_category);
        formData.append('event_capacity', inputs.event_capacity);
        formData.append('event_status', inputs.event_statu);
        formData.append('ticket_type', inputs.ticket_type);
        formData.append('ticket_price', inputs.ticket_price);
        formData.append('event_description', inputs.event_description);
        formData.append('event_image', inputs.event_image);

        let response = await fetch("http://127.0.0.1:8000/api/add_event",{
            method:'POST',
            body: formData
        });
        if (response.ok){
            alert("Data added")
        setInputs({
            event_name:'',
            event_date: '',
            event_location: '',
            event_organizer: '',
            event_category: '',
            event_capacity: '',
            event_status:'',
            ticket_type: 'regular', 
            ticket_price: '',
            event_image: '',
            event_description: ''
        });
        }
        formRef.current.reset(); 
    }
  return (
    <div>
        <AdminBar/>
        <br></br>
        <br></br>
        <div className='col-sm-6 offset-sm-3'> 
        <Form method="POST" enctype="multipart/form-data" ref={formRef }>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Event Name" 
                    name="event_name"
                    value={inputs.event_name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Control type="datetime-local" placeholder="Event Date"
                     name="event_date"
                     value={inputs.event_date}
                     onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Control type="text" placeholder="Event Location" 
                    name="event_location"
                    value={inputs.event_location}
                    onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Event Organizer" 
                    name='event_organizer'
                    value={inputs.event_organizer}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control type="text" placeholder="Event Category" 
                    name='event_category'
                    value={inputs.event_category}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCapacity">
                    <Form.Control type="number" placeholder="Event Capacity" 
                    name='event_capacity'
                    value={inputs.event_capacity}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control type="text" placeholder="Event Status" 
                    name='event_status'
                    value={inputs.event_status}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTicketType">
                <Form.Select aria-label="Select Ticket Type"
                name= 'ticket_type'
                value={inputs.ticket_type}
                onChange={handleChange}
                >
                    <option value="regular">Regular</option>
                    <option value="VIP">VIP</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Ticket Price" 
                     name='ticket_price'
                     value={inputs.ticket_price}
                     onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Control type="file" placeholder="Event Poster" 
                    name="event_image"
                    onChange={handlefile}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEventDescription">
                <Form.Control
                    as="textarea"
                    rows={3} 
                    placeholder="Event Description"
                    name="event_description"
                    value={inputs.event_description}
                    onChange={handleChange}
                />
                </Form.Group>
                <Button className='btn btn-primary' type="submit" onClick={addEvent} >
                    Add Event
                </Button>
            </Form>

        </div>
      
    </div>
  )
}

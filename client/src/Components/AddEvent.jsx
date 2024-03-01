import React,{useState,useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import { CiBoxList } from "react-icons/ci";
import { IoCreateSharp } from "react-icons/io5";


export default function AddEvent() {
    const formRef = useRef(null);
    const [inputs,setInputs] = useState({
        event_name:'',
        event_date: '',
        event_location: '',
        event_organizer: '',
        event_category: '',
        event_capacity: '',
        regular_ticket_price:'',
        vip_ticket_price:'',
        available_regular_tickets:'',
        available_vip_tickets:'',
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
        formData.append('regular_ticket_price', inputs.regular_ticket_price);
        formData.append('vip_ticket_price', inputs.vip_ticket_price);
        formData.append('available_regular_tickets', inputs.available_regular_tickets);
        formData.append('available_vip_tickets', inputs.available_vip_tickets);
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
            regular_ticket_price:'',
            vip_ticket_price:'',
            available_regular_tickets:'',
            available_vip_tickets:'',
            event_image: '',
            event_description: ''
        });
        }
        formRef.current.reset(); 
    }
  return (
    <div>
    {/* <AdminBar/> */}
    <div className="bg-slate-200 flex h-screen">
  <aside className="fixed z-50 md:relative">
    {/* Sidebar */}
    <input type="checkbox" className="peer hidden" id="sidebar-open" />
    <label
      className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-[] peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
      htmlFor="sidebar-open"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </label>
    <nav
      aria-label="Sidebar Navigation"
      className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-[#d4a373] text-white transition-all md:h-screen md:w-64 lg:w-72"
    >
      <div className="bg-orange-800/40 mt-5 py-4 pl-10 md:mt-10">
        <span className="">
          <span className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d4a373] align-bottom text-2xl font-bold">
            E
          </span>
          <span className="text-xl">eventSpot</span>
        </span>
      </div>
      <ul className="mt-8 space-y-3 md:mt-20">
        <li className="relative">
          <Link to="/events" className="focus:bg-[#7f4f24] hover:bg-[#7f4f24] flex w-full space-x-2 rounded-md px-10 py-4 text-gray-100 focus:outline-none">
            <span>
            <CiBoxList className=" text-3xl" />
            </span>
            <span className="">Events</span>
          </Link>
        </li>
        <li className="relative">
          <Link to="/add_event" className="focus:bg-[#7f4f24] hover:bg-[#7f4f24] flex w-full space-x-2 rounded-md px-10 py-4 text-gray-100 focus:outline-none">
            <span>
            <IoCreateSharp className=" text-3xl" />
            </span>
            <span className="">Add Events</span>
          </Link>
        </li>
      </ul>

      <div className="my-6 mt-auto ml-10 flex cursor-pointer">
        <div>
        
        </div>
        <div className="ml-3">
          <p className="font-medium"></p>
          <p className="text-sm text-gray-300"></p>
        </div>
      </div>
    </nav>
  </aside>
  {/* /Sidebar */}

  <div className="flex h-full w-full flex-col">
    {/* Navbar */}
    <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
      <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
        <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
          
         
        </div>

        <button
          className="px-6 py-3 duration-300 ease-linear flex justify-center w-full sm:w-auto border bg-brown-400/20 border-blue-600 text-white bg-[#7f4f24] rounded-xl"
        >
          Log Out
        </button>
      </div>
    </header>
    {/* /Navbar */}

    {/* Main */}
    <div className="h-full overflow-hidden pl-10">
      <main
        id="dashboard-main"
        className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
      >
        <h1 className="text-2xl font-black text-[#d4a373]">ADMIN DASHBOARD</h1>
        <p className="mb-6 text-gray-600">
          Events
        </p>
        <div>
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
                    <Form.Control type="number" placeholder="Regular Ticket Price" 
                    name='regular_ticket_price'
                    value={inputs.regular_ticket_price}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control type="number" placeholder="VIP Ticket Price" 
                    name='vip_ticket_price'
                    value={inputs.vip_ticket_price}
                    onChange={handleChange}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Number of Regular Tickets" 
                     name='available_regular_tickets'
                     value={inputs.available_regular_tickets}
                     onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Number of VIP Tickets" 
                     name='available_vip_tickets'
                     value={inputs.available_vip_tickets}
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
                <Button style={{backgroundColor:'brown'}} type="submit" onClick={addEvent} >
                    Add Event
                </Button>
            </Form>

        </div>
      
    </div>

        
      </main>
    </div>
    {/* /Main */}

  </div>
</div>
  
</div>
    
  )
}


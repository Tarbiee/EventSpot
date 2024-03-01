import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom'
import { CiBoxList } from "react-icons/ci";
import { IoCreateSharp } from "react-icons/io5";

export default function Events() {
  const navigate = useNavigate();

  function logOut(){
    localStorage.clear();
    navigate('/login')

}

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/events')
        .then(res => res.json())
        .then((data) => setEvents(data))
    },[])

    function handleDelete(id){
         fetch(`http://127.0.0.1:8000/api/delete/${id}`,{
            method:'DELETE'
        })
        .then(response => {
            if(response.ok){
                setEvents(events.filter(event => event.event_id !== id));
                alert("Deleted Suceesfully!")
            }
        })
        .catch(error => {
            console.error('Error deleting event:', error);
        });
        
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
          onClick={logOut}
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
<div className='col-sm-6 offset-sm-3'> 
<Table responsive>
      <thead>
        <tr>
          <th>Event Id</th>
          <th>Event Name</th>
          <th>Edit Event</th>
          <th>Delete Event</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.event_id}>
            <td>{event.event_id}</td>
            <td>{event.event_name}</td>
            <td>
                <Link to={`/edit_event/${event.event_id}`}>
                  <FontAwesomeIcon icon={faPen} style={{ color: '#7f4f24' }} />
                </Link>              
            </td>
            <td>
              <FontAwesomeIcon icon={faTrashCan} style={{ color: '#7f4f24' }} onClick={() => handleDelete(event.event_id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
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


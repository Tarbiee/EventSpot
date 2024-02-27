import React,{useEffect,useState} from 'react'
import AdminBar from './AdminBar'
import { Table } from 'react-bootstrap';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'

export default function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/events')
        .then(res => res.json())
        .then((data) => setEvents(data))
    },[])
  return (
    <div>
        <AdminBar/>
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
                  <tr key={event.id}>
                    <td>{event.event_id}</td>
                    <td>{event.event_name}</td>
                    <td>
                        <Link to={`/edit_event/${event.event_id}`}>
                          <FontAwesomeIcon icon={faPen} style={{ color: '#40A2D8' }} />
                        </Link>              
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faTrashCan} style={{ color: '#40A2D8' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </div>
      
    </div>
  )
}

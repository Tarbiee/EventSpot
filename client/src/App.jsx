import Admin from './Components/Admin'
import AddEvent from './Components/AddEvent'
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Events from './Components/Events'
import EditEvent from './Components/EditEvent'
import EventsCard from './Components/EventsCard'
import './App.css'
import HomePage from './Components/HomePage'

function App() {


  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/add_event' element={<AddEvent/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/edit_event/:id' element={<EditEvent/>}/>
      <Route path='/events_card' element={<EventsCard/>}/>

      </Routes>
  

    </div>
  )
}

export default App

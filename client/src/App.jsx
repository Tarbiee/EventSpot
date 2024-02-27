import Admin from './Components/Admin'
import AddEvent from './Components/AddEvent'
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import './App.css'

function App() {


  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/add_event' element={<AddEvent/>}/>

      </Routes>
  

    </div>
  )
}

export default App

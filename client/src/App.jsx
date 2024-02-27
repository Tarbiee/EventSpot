import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import './App.css'

function App() {


  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

      </Routes>
  

    </div>
  )
}

export default App

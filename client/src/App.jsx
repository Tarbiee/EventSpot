import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
import './App.css'

function App() {


  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' element={<Register/>}/>

      </Routes>
  

    </div>
  )
}

export default App

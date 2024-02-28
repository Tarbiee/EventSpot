import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    async function signIn(event) {
        event.preventDefault(); // Prevent default form submission
    
        let item = { email, password };
        
        let response = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(item)
        });
        if (response.ok){
           let result = await response.json();
           localStorage.setItem("user-info", JSON.stringify(result))
           alert('Login successfull')
           
           if(result.email === 'john@123'){
            navigate('/admin')
        }else{
            navigate('/homepage')

        }
        

            setEmail("");
            setPassword("");
            
        }else {
            alert('Login failed')
            console.error('Failed to login:', response.statusText);
        }
       
    }


  return (
    <div className='col-sm-6 offset-sm-3'>
     <h1>Login Page</h1>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Email" 
        name= 'email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" 
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={(event) => signIn(event)}>
        Sign In
      </Button>
      
    </div>
  )
}

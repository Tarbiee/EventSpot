import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUp(event) {
        event.preventDefault(); // Prevent default form submission
    
        let item = { name, email, password };
        
        let response = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (response.ok){
           let result = await response.json();
           localStorage.setItem("user-info", JSON.stringify(result))
           alert('Registration successfull')
           setName("");
            setEmail("");
            setPassword("");
            navigate('/login')

        }else {
            // Handle non-OK response (e.g., display error message)
            console.error('Failed to register:', response.statusText);
        }
       
    }
    
  return (
    <div className='col-sm-6 offset-sm-3'>
        <h3>Register Component</h3>

    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Username" 
        name= 'name'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Email" 
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" 
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(event) => signUp(event)}>
        Sign Up
      </Button>
    </Form>
      
    </div>
  )
}

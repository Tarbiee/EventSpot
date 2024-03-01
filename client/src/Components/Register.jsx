import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import user from "../images/login1.png"


export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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
            console.error('Failed to register:', response.statusText);
        }
       
    }
    
  return (
    <>
       
    <div className=" lg:mt-40 mt-20 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
    <div
      className="hidden bg-cover lg:block lg:w-1/2"
      style={{
        backgroundImage: `url(${user})`,
      }}
        ></div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <div className="flex justify-center mx-auto">
      <div className="flex items-center min-w-max relative">
      <div  className="font-semibold flex items-center gap-x-2">
        <span className="">
        <span className="mr-1 text-white inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#582f0e] align-bottom text-2xl font-bold">
                  E
                </span>
                <span className="text-xl">evenSpot</span>
        </span>
      </div>
    </div>
      </div>

      <p className="mt-3 text-xl text-center text-gray-600 ">
        Welcome!
      </p>

      <p
       
        className="flex items-center justify-center  mt-4 text-gray-600 transition-colors duration-300 transform   hover:bg-gray-50"
      >
        <div className="px-4 py-2">
         
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center  text-[#582f0e] mr-10 text-sm">
        Make reservations to your preferred events
        </span>
      </p>

    

      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="LoggingEmailAddress"
        >
          User Name
        </label>
        <input
        name= 'name'
        value={name}
        onChange={(e) => setName(e.target.value)}
          id="password"
          required
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
          type="username"
        />
      </div>
      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600"
          htmlFor="LoggingEmailAddress"
        >
          Email Address
        </label>
        <input
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          id="email"              
          required
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#582f0e]"
          type="email"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="loggingPassword"
          >
            Password
          </label>
         
        </div>

        <input
         name='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
          id="password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="loggingPassword"
          >
            Confirm Password
          </label>
        
        </div>

        <input
         onChange={(e) =>  setConfirmPassword(e.target.value)}
         name='confirmPassword'
         value={confirmPassword}
         required
          id="confirmPassword"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-[#582f0e] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#582f0e]"
          type="password"
        />
      </div>

      <div className="mt-6">
        <button onClick= {signUp} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#582f0e] rounded-lg hover:bg-[#582f0e] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          Sign Up
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b md:w-1/4"></span>

        <button
        onClick={() => navigate("/login")}
          
          className="text-xs text-gray-500 uppercase  hover:underline"
        >
          or login up
        </button>

        <span className="w-1/5 border-b md:w-1/4"></span>
      </div>
    </div>
  </div>
  </>
  )
}


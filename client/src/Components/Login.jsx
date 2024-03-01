import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import login from "../images/login1.png"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    async function signIn(event) {
        event.preventDefault(); 
    
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
           
           if(result.email === 'admin@gmail.com'){
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
    <div className=" lg:mt-40 mt-20 pb-10 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div
        className="hidden bg-cover lg:block  lg:w-1/2"
        style={{
          backgroundImage: `url(${login})`,
      }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <div className="flex items-center min-w-max relative">
            <div className="font-semibold flex items-center gap-x-2">
              <span className="">
                <span className="mr-1 text-white inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#582f0e] align-bottom text-2xl font-bold">
                  E
                </span>
                <span className="text-xl">evenSpot</span>
              </span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 ">Welcome back!</p>

        <div className="flex items-center justify-center  mt-4 text-gray-600 transition-colors duration-300 transform   hover:bg-gray-50">
          <div className="px-4 py-2"></div>

          <span className="w-5/6 px-4 py-3 font-bold text-center  text-[#582f0e] mr-10 text-sm">
            Make reservations to your preferred events
          </span>
        </div>
        <form onSubmit={signIn}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="LoggingEmailAddress"
            >
              Email
            </label>
            <input
             name= 'email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              id="password"
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="username"
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
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-[#582f0e] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#582f0e] rounded-lg hover:bg-[#582f0e] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b md:w-1/4"></span>

          <button
            className="text-xs text-[#582f0e] uppercase  hover:underline"
          >
            <Link to="/">
            or sign up
            </Link>
          </button>

          <span className="w-1/5 border-b md:w-1/4"></span>
        </div>
      </div>
    </div>
   
  )
}
  

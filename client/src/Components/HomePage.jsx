import React from 'react'
import Header from './Header'
import Hero from './Hero'

export default function HomePage() {

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/user', {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //   },
  //   credentials: 'include',
  //   })
  //     .then(res => res.json())
  //     .then((data) => console.log(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  return (
    <div>
        <Header/>
        <Hero/>
        
      
    </div>
  )
}

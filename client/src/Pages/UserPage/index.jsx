import React, { useEffect, useState } from 'react'
import './User.scss'
const UserPage = () => {
    const [user, setUser] = useState([])
    useEffect( ()=>{
    fetch('http://localhost:3169/users/user')
    .then(res=>res.json())
    .then(data=>setUser(data))
    },[user])
  return (
    <>
{user && user.map((profile)=>(
    
    <div>
        <h2>User:{profile.Username}</h2>
        <p>role:{profile.role}</p>
        <p>password:*****</p>
    </div>
   
))}
    </>
  )
}

export default UserPage

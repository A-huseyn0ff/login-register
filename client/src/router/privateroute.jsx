import React, { useContext } from 'react'
import { UserContext } from '../Context/context'
import { NavLink, Outlet } from 'react-router-dom'
const Privateroute = () => {
    const {user}=useContext(UserContext)
  return (
    user ? <Outlet/> : <NavLink to={"/login"}></NavLink> 
  )
}

export default Privateroute

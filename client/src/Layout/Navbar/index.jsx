import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
      <Link to={'/'}>Users</Link>
      <Link to={'/Login'}>Login</Link>
      <Link to={'/SignUp'}>SignUp</Link>

    </div>
    </>
  )
}

export default Navbar

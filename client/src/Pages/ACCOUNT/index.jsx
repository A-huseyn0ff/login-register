import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/context'
import { jwtDecode } from "jwt-decode";
const Account = () => {
  const {token}=useContext(UserContext)
  const [userdata] = useState(jwtDecode(token))
  return (
   <>
  salam {userdata.Username}
   </>
  )
}

export default Account

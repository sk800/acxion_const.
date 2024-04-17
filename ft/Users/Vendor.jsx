import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Vendor = () => {
     const navigate=useNavigate();
    const handleClick=()=>{
       navigate("/"); // directed to home page
    }
  return (
    <>

     <div>Welcome vendor</div>
     <div>Add new Item</div>
     <div>Transection</div>
     <button
       onClick={handleClick}
     >Logout</button>
      
    </>
  )
}

export default Vendor
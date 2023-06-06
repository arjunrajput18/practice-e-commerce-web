import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { DataState } from '../../Context/DataContext';

export const Navbar = () => {
const {dataDispatch
} = DataState();
const navigate=useNavigate()
const handleChange=(e)=>{
    navigate("/productlisting")
  dataDispatch({type:"SEARCH",payload:e.target.value})
}


  return (
    <div>
          <input type="search" placeholder="search here" onChange={handleChange}/>

        <NavLink to="/">Home</NavLink>{" "}||{" "}
        <NavLink to="/productlisting">Explore</NavLink>{" "} ||{" "}
        <NavLink to="/wishlist">Wishlist</NavLink>{" "}||{" "}
        <NavLink to="/cart">Cart</NavLink>{" "}||{" "}
        <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}

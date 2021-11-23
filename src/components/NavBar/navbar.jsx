import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Nav,
  Page1,
  Page2
} from './style'

const Navbar = () => {
  const navigate = useNavigate()
  return (
  <Nav>
    <Page1  onClick={()=> navigate("/")} >Home</Page1>
    <Page2  onClick={()=> navigate("/heroes")} >Heroes</Page2>
  </Nav>
   
  )
}

export default Navbar

import React from 'react'
import { NavLink } from "react-router-dom"

import headerImg from "../../assets/headerImg.png"

import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Food Truck TrackR</h1> 
      <img src={ headerImg } alt="food truck" />
      <div className="landing-page-nav">
        <NavLink
          className="nav-link top"
          to="/signup"
        >Sign Up</NavLink>
        <NavLink
          className="nav-link bottom"
          to="/signin"
        >Sign In</NavLink>
      </div>
    </div>
  )
}

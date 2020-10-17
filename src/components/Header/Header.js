import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom"

import "./Header.css"

import headerBanner from "../../assets/headerImg.png"

import SignUp from "../SignUp/SignUp"
import SignIn from "../SignIn/SignIn"

export default function Login() {
  return (
    <div className="header-container">
      <img src={headerBanner} href="food truck" />
      <h1>Food Truck TrackR</h1>
      <div className="nav-header">
        <NavLink
          activeClassName="active"
          className="nav-link left"
          to="/login/signup"
        >Sign Up</NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link right"
          to="/login/signin"
        >Sign In</NavLink>
      </div>
    </div>
  )
}
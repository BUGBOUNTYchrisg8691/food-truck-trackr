import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function MainFooter(props) {
  return (
    <div>
      <FAIcon icon={{faSearch}} />
    </div>
  )
}

import React, { useState } from 'react'

import "./SignUp.css"

import SignUpForm from '../SignUpForm/SignUpForm'

export default function SignUp() {
  const [users, setUsers] = useState([])
  
  const submit = newUser => {
    setUsers([
      ...users,
      newUser
    ])
  }

  return (
    <div className="signup-container">
      <SignUpForm submit={submit} />
    </div>
  )
}

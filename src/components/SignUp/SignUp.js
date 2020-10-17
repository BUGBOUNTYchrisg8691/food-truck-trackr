import React, { useState } from 'react'

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
    <div>
      <SignUpForm submit={submit} />
    </div>
  )
}

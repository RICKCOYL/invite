import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { signUpUser } from "../../api/api"

const Form = ({ token }) => {
    const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    signUpUser(user)
  }

  useEffect(
    () => {
    },
    [token]
  )

  if (token && token !== "") return navigate("/invites")
  
  return (
    <div>
      <form onSubmit={handleSubmit} mt={2}>
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          value={user.password_confirmation}
          onChange={e =>
            setUser({ ...user, password_confirmation: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TextField, Box, Button,Typography  } from "@material-ui/core"
import { signUpUser } from "../../api/api"

const FormSignUp = ({ token }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: ""
  })


  const handleSubmit = async e => {
    e.preventDefault()
    const res = await signUpUser(user)

    if (res.status === 200) {
      navigate("/invites")
    }
    setUser({
      email: "",
      password: "",
      password_confirmation: ""
    })
  }

  useEffect(
    () => {
      if (token && token !== "") return navigate("/invites")
    },
    [token, navigate]
  )

  return (
    <Box>
      <Typography variant="h4" color="initial">Sign Up</Typography>
      <form onSubmit={handleSubmit} mt={2}>
        <Box>
          <TextField
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
        </Box>
        <Box>
          <TextField
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
        </Box>
        <Box>
          <TextField
            type="password"
            placeholder="Password Confirmation"
            value={user.password_confirmation}
            onChange={e =>
              setUser({ ...user, password_confirmation: e.target.value })}
          />
        </Box>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Box>
  )
}

export default FormSignUp

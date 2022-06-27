import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TextField, Box, Button } from "@material-ui/core"
import { loginUser } from "../../api/api"

const FormLogin = ({loading,token}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleSubmit = async(e )=> {
        e.preventDefault()
        const res = await loginUser(user)
        
        if(res.status === 200){
        // console.log(res,"$$$$$")
            navigate("/invites")
        }

        setUser({
            email: "",
            password: ""
        })
    }
    
    
  return (
    <>
    <h2>
      LOGIN
    </h2>
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
        <br />
        <Button type="submit" variant="contained" color="primary" >Login</Button>
      </form>
      </>
  )
}

export default FormLogin
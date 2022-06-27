import React,{useState} from "react"
import {Navigate} from "react-router-dom"
import {TextField,Box,Button} from '@material-ui/core'
import { sendInvite } from "../../api/api"

const Invites = () => {
  const token= localStorage.getItem("token")


  console.log(token, "Invites token")
  const [invite, setInvite] = useState({
    email: ""
  })
  

  const handleSubmit = e => {
    e.preventDefault()
    sendInvite(invite)
    setInvite({
      email: ""
    })
  }

  return (
    <>
    {!token ? <Navigate to="/sign_in" /> :
    <>
    <h2>
      Invite a new user by using there email address
    </h2>
    <form onSubmit={handleSubmit}>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        type="email"
        placeholder="Add Email to send invite"
        value={invite.email}
        onChange={e => setInvite({ ...invite, email: e.target.value })}
      />
      </Box>
      <br />
      <Box sx={{ m: 0.5 }}>
      <Button type="submit" variant="contained" color="primary" >Send invite</Button>
      </Box>
    </form>
    </>
}
    </>
  )
}

export default Invites

import React,{useState, useEffect} from "react"
import {Navigate} from "react-router-dom"
import {TextField,Box,Button,Typography } from '@material-ui/core'
import { sendInvite,fetchInvites } from "../../api/api"
import InvitesList from "./InvitesList"

const Invites = () => {
  const token= localStorage.getItem("token")

  const [invite, setInvite] = useState({
    email: ""
  })

  const [invites, setInvites] = useState([])

  useEffect( () => {
    async function fetchData() {
     const res =  await fetchInvites()
      setInvites(res)

    }
    fetchData()
  }, [])
  

  console.log(invites, "%%%%")
  

  const handleSubmit = async (e )=> {
    e.preventDefault()
    sendInvite(invite)
    const res = await fetchInvites()
    setInvites(res)
    setInvite({
      email: ""
    })
  }

  return (
    <Box>
    {!token ? <Navigate to="/sign_in" /> : (
      <>
    <Typography variant="h4" >
      Invite a new user by using there email address
    </Typography>
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
    </>)
    }
     
    <InvitesList invites={invites} />
</Box>
  )
}

export default Invites

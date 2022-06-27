import React,{useState} from "react"
import { Navigate } from "react-router-dom"
import { sendInvite } from "../../api/api"

const Invites = ({ token }) => {
  const [invite, setInvite] = useState({
    email: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    sendInvite(invite)
  }

  if (!token) return <Navigate replace to="/" />
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Add Email to send invite"
        value={invite.email}
        onChange={e => setInvite({ ...invite, email: e.target.value })}
      />
      <button type="submit">Send invite</button>
    </form>
  )
}

export default Invites

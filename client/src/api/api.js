import axios from "axios"
import jwt_decode from "jwt-decode"

const url = "http://localhost:3000"

export const signUpUser = async user => {
  return await axios
    .post(`${url}/users`, {
      user: {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      }
    })
    .then(res => {
      localStorage.setItem("token", res.headers.authorization)
      return console.log(res)
    })
    .catch(err => {
      return console.log(err)
    })
}

export const sendInvite = async invite => {
  const token = localStorage.getItem("token")
  const decoded = jwt_decode(token)

  return await axios
    .post(`${url}/invites`, {
      invite: {
        email: invite.email,
        user_id: decoded.sub
      }
    })
    .then(res => {
      return console.log(res)
    })
    .catch(err => {
      return console.log(err)
    })
}

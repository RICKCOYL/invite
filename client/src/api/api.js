import axios from "axios"
import jwt_decode from "jwt-decode"
// import {signInUser,createUser } from "../actions/auth"

const url = "http://localhost:3000"

export const signUpUser = async user => {
  try {
    const response = await axios
    .post(`${url}/users`, {
      user: {
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      }
    })

    localStorage.setItem("token", JSON.stringify(response.headers.authorization))
    return response 
  } catch (error) {
    console.log(error)
  }
    
}

export const fetchInvites = async () => {
  try {
    const response = await axios.get(`${url}/invites`)
    const invites = await response.data
    return invites
    } catch (error) {
    console.log(error)
  }
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

export const loginUser = async user => {
  try {
    const response = await axios
    .post(`${url}/users/sign_in`, {
      user: {
        email: user.email,
        password: user.password
      }
    })

    localStorage.setItem("token", JSON.stringify(response.headers.authorization))
    return response
  } catch (error) {
    console.log(error)
  }

}
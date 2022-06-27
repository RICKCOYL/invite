import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Container } from "@material-ui/core"

import FormSignUp from "./components/AuthForm/FormSignUp"
import FormLogin from "./components/AuthForm/FormLogin"
import Invites from "./components/invites/Invites"
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  const token= localStorage.getItem("token")

  return (
    <Router>
      <main className="App">
        <NavBar token={token} />
        <Container>
          <Routes>
            <Route path="/" exact element={<FormSignUp token={token} />} />
            <Route
              path="/sign_in"
              element={<FormLogin token={token} />}
            />

              <Route path="/invites" element={<Invites token={token}/>} />

          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App

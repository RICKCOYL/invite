import React from "react"
import { Link } from "react-router-dom"
import {
  Box,
  Toolbar,
  AppBar,
  Button,
  ButtonGroup
} from "@material-ui/core"

const NavBar = () => {
  const token= localStorage.getItem("token")
   

  const handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }



  return (
    <Box>
      <AppBar   position="static">
        <Toolbar >
          <Box>
         { !token ? (
          <>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
         <Button
              component={Link}
              to="/sign_in"
              variant="contained"
            >
              login
            </Button>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="secondary"
            >
              Sign up
            </Button>
          </ButtonGroup>
            </>)
            : (
            <Button component={Link} to="/invites" variant="contained" color="secondary" onClick={handleSignOut}>
              Sign Out
            </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar

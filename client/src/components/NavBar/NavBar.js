import React from 'react'
import {Link} from 'react-router-dom'
import {Box,IconButton,Toolbar,AppBar} from '@material-ui/core'
import {Menu as MenuIcon} from '@material-ui/icons'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link component="button" variant="contained" to="/" color="secondary">sign up</Link>
          <Link component="button"to="/login" color="inherit">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
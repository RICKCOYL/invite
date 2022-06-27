import React from 'react'
import {Box,List,ListItem, ListItemText, Typography  } from '@material-ui/core'

const InvitesList = ({invites}) => {
  return (
    <Box > 
        <Typography variant="h5" >Invites have Been sent to</Typography>
        { invites ? invites.map(invite => 
        <List key={invite}>
            <ListItem >
                <ListItemText primary={invite.email} />
            </ListItem>
            </List>)
    : <Typography variant="p">No invites yet</Typography>}
    </Box>
  )
}

export default InvitesList
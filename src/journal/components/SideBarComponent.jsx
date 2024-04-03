import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export const SidebarComponent = ({ drawerWigth = 240 }) => {

  const { displayName } = useSelector(state => state.auth);




  return (
    <Box component={'nav'} sx={{ width: { sm: drawerWigth, flexShrink: { sm: 0 } } }}>
      <Drawer variant="permanent" open sx={{ display: { sx: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWigth } }}>
        <Toolbar>
          <Typography variant="h6" noWrap component={'div'}> {displayName}</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['enero', 'febrero', 'marzo', 'abril', 'mayo',].map((text) => (

              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />

                  </ListItemIcon>

                  <Grid>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                  </Grid>
                </ListItemButton>
              </ListItem>

            ))
          }
        </List>
      </Drawer>




    </Box>
  )
}

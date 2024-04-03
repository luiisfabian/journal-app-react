import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth'

export const NavBar = ({ drawerWidth  = 240}) => {




    const onLogOauth = () =>{

        const dispatch = useDispatch();
        dispatch(startLogout())


    }

    return (
        <>
            <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${ drawerWidth }px)`, ml: `${drawerWidth}px` } }} color="primary">
                <Toolbar>
                    <IconButton color='inherit' edge='start' sx={{mr: 2, display:{sm: 'none'}}}>
                        <MenuOutlined />
                    </IconButton>

                    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h6' noWrap component={'div'}> JournalApp</Typography>
                        <IconButton color='error' onClick={onLogOauth()}>
                            <LogoutOutlined /> 
                          
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

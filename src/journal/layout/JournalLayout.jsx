import { Box, Toolbar } from "@mui/material"
import { NavBar, SidebarComponent } from "../components"

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <>
            <Box sx={{ dysplay: 'flex' }}>
                {/* navbar */}
                <NavBar drawerWidth={drawerWidth} />

                {/* sidebar  */}

                <SidebarComponent  drawerWidth={drawerWidth} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* Toolbar  */}
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </>

    )
}

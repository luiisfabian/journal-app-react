import { Box } from "@mui/material"

export const JournalLayout = ({children}) => {
    return (
        <>
            <Box sx={{ dysplay: 'flex' }}>
                {/* navbar */}

                {/* sidebar  */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {/* Toolbar  */}
                    {children}
                </Box>
            </Box>
        </>

    )
}

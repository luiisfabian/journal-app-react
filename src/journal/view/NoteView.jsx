import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1 }}>
            <Grid item >
                <Typography fontSize={39} fontWeight={'light'}> 28 enero 1996</Typography>
            </Grid>

            <Grid item >

                <Button color='primary' sx={{ p: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />

                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    id=""
                    label="Titulo"
                    placeholder="Titulo"
                    sx={{ border: 'none', mb: 1 }}

                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    id=""
                    placeholder='Que sucedio hoy?'
                    minRows={5}
                />
            </Grid>

            <ImageGallery/>
        </Grid>

    )
}

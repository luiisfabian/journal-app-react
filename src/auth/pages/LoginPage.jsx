import { Grid, TextField, Typography } from '@mui/material'

export const LoginPage = () => {
  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'
      sx={{ minHeight: '100hv', backgroundColor: 'primary.main', padding: 4 }}>

      <Grid item className='box-shadow' xs={3} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

        <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

        <form>
          <Grid container>
             <Grid item xs={12} sx={{mt: 5}}>
                <TextField label="Email" type='email' placeholder='email@email.com' fullWidth />
             </Grid>

             <Grid item xs={12} sx={{mt: 5}}>
                <TextField label="Password" type='password' placeholder='e*****' fullWidth />
             </Grid>
            
          </Grid>
        </form>

      </Grid>

    </Grid>
  )
}

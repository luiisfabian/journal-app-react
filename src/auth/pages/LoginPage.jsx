import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'
      sx={{ minHeight: '100hv', backgroundColor: 'primary.main', padding: 4 }}>

      <Grid item className='box-shadow' xs={3} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

        <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <TextField label="Email" type='email' placeholder='email@email.com' fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ mt: 5 }}>
              <TextField label="Password" type='password' placeholder='e*****' fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>

              <Grid item xs={12} sm={3}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ marginLeft: 1 }} >
                    Google

                  </Typography>
                </Button>
              </Grid>

            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una Cuenta

            </Link>
          </Grid>
        </form>

      </Grid>

    </Grid>
  )
}

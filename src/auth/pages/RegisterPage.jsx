import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Layout } from '../layout/Layout'

export const RegisterPage = () => {
  return (


    <Layout title='Registro'>

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Nombre Completo" type='text' placeholder='Nombre' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Email" type='email' placeholder='email@email.com' fullWidth />
          </Grid>


          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Password" type='password' placeholder='e*****' fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>

            <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>

  

          </Grid>

        </Grid>

        <Grid container direction='row' justifyContent='end' mt={5}>
          <Typography sx={{mr:1 }}> Ya tienes Cuenta? </Typography>
          <Link component={RouterLink} color='inherit' to="/auth/login">
           Ingresar

          </Link>
        </Grid>
      </form>
    </Layout>




  )
}

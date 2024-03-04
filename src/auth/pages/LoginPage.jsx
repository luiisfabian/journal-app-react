import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkAutentication, startGoogleSignIn } from '../../store/auth/index'

export const LoginPage = () => {

  const { email, password, onInputChange } = useForm({
    email: 'luiisfaiban96@gmail.com',
    password: 1234566

  });

  const dispatch = useDispatch();

  dispatch(checkAutentication());

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (


    <Layout title='Login'>

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Email" type='email' placeholder='email@email.com' value={email} name='email' onChange={onInputChange} fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Password" type='password' placeholder='e*****' value={password} name='password' onChange={onInputChange} fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>

            <Grid item xs={12} sm={3}>
              <Button type='submit' onClick={() => dispatch} variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
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
    </Layout>




  )
}

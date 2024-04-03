import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { checkAutentication, checkingCredentials, startGoogleSignIn, startLoginWithEmailPassWord } from '../../store/auth'
import { loginWithEmailAndPassword } from '../../firebase/providers'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });


  const isAuthenticating = useMemo(() => status === 'checking', [status]);


  // dispatch(checkAutentication());

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(await startLoginWithEmailPassWord({ email, password }))
  }



  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())

  }

  return (


    <Layout title='Login'>

      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Email" type='email' placeholder='email@email.com' value={email} name='email' onChange={onInputChange} fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField label="Password" type='password' placeholder='e*****' value={password} name='password' onChange={onInputChange} fullWidth />
          </Grid>



          <Grid
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}>
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>

            <Grid item xs={12} sm={3}>
              <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
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

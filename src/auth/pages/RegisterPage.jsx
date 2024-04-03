import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'


const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {

  email: [(value) => value.includes('@'), 'El correo debe contener @'],
  password: [(value) => value.length >= 6, 'El password debe contener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}


export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)


  const { status, errorMessage } = useSelector(status => status.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);


  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true);

    if (!isFormValid) return;
    console.log(formData);

    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (


    <Layout title='Registro'>
      <h1>FormValid {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
      <form className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={displayNameValid} error={!!displayNameValid && formSubmitted} name='displayName' value={displayName} onChange={onInputChange} label="Nombre Completo" type='text' placeholder='Nombre' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={emailValid} error={!!emailValid && formSubmitted} name='email' value={email} onChange={onInputChange} label="Email" type='text' placeholder='email@email.com' fullWidth />
          </Grid>


          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={passwordValid} error={!!passwordValid && formSubmitted} name='password' value={password} onChange={onInputChange} label="Password" type='password' placeholder='e*****' fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error' >{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button disabled={isCheckingAuthentication} onClick={onSubmit} variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>



          </Grid>

        </Grid>

        <Grid container direction='row' justifyContent='end' mt={5}>
          <Typography sx={{ mr: 1 }}> Ya tienes Cuenta? </Typography>
          <Link component={RouterLink} color='inherit' to="/auth/login">
            Ingresar

          </Link>
        </Grid>
      </form>
    </Layout>




  )
}

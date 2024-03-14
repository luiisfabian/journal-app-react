import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { useForm } from '../../hooks'


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


  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData);

  console.log(displayNameValid);

  const onSubmit = (event) => {
    console.log(formState);

    event.preventDefault()

  }


  return (


    <Layout title='Registro'>

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={displayNameValid} error={!displayNameValid} name='displayName' value={displayName} onChange={onInputChange} label="Nombre Completo" type='text' placeholder='Nombre' fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={emailValid} error={!emailValid} name='email' value={email} onChange={onInputChange} label="Email" type='text' placeholder='email@email.com' fullWidth />
          </Grid>


          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField helperText={passwordValid} error={!passwordValid} name='password' value={password} onChange={onInputChange} label="Password" type='password' placeholder='e*****' fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: '2', mt: 5 }}>

            <Grid item xs={12} sm={12}>
              <Button onClick={onSubmit} variant='contained' fullWidth>
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

import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../../ui/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../../firebase/config'
import { logOuth, login } from '../../store/auth'

export const AuthRoutes = () => {

  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user);

      if (!user) return dispatch(logOuth());
      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
    });

  }, [])


  if (status === 'checking') {
    return <CheckingAuth />

  }
  return (
    <Routes>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='/*' element={<Navigate to="/auth/login" />}></Route>

    </Routes>
  )
}

import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../../ui/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../../firebase/config'
import { logOuth, login } from '../../store/auth'

export const AuthRoutes = () => {


  return (
    <Routes>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='/*' element={<Navigate to="/auth/login" />}></Route>

    </Routes>
  )
}

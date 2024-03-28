import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { useSelector } from 'react-redux'
import { CheckingAuth } from '../../ui/components/CheckingAuth'

export const AuthRoutes = () => {

  const { status } = useSelector(state =>  state.auth)

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

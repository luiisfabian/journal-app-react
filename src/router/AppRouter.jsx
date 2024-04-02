import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { RegisterPage } from '../auth/pages'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { logOuth, login } from '../store/auth'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { FirebaseAuth } from '../firebase/config'

export const AppRouter = () => {

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
      {
        status === 'authenticated' ?
          <Route path="/*" element={<JournalRoutes />} />
          :
          <Route path="/auth/*" element={<AuthRoutes />} />



      }

      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}

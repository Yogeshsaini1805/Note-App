import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Verify from './pages/Verify.jsx'
import VerifyEmail from "./pages/VerifyEmail.jsx"
import ForgotPassword from './pages/ForgotPassword.jsx'
import VerifyOTP from './pages/VerifyOTP.jsx'
import Navbar from './components/Navbar.jsx'
import ChangePassword from './pages/ChangePassword.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home/></>
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/verify',
    element: <VerifyEmail />
  },
  {
    path: '/verify/:token',
    element: <Verify />
  },
  {
    path: '/login',
    element: <Login /> 
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  },
  {
    path:'/verify-otp/:email',
    element:<VerifyOTP/>
  },
  {
    path:'/change-password/:email',
    element:<ChangePassword/>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
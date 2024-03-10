import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import FormContainer from './components/Form.jsx'
// import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    // <ProtectedRoute>
      <HomePage />
    // </ProtectedRoute>
  },
  {
    path: '/signin',
    element: <SignInPage />
  },
  {
    path: '/adduser',
    element: <FormContainer />
  },
  {
    path: 'edituser/:userid',
    element: <FormContainer />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

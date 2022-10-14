import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './global.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import App from './App'
import { Login } from './pages/login'
import { Signup } from './pages/signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../protected-route'
import { CreateHomework } from './create-homework'
import { Details } from './details'
import { Home } from './home'
import { Login } from './login'
import { Signup } from './signup'

export const router = createBrowserRouter([
  // open routes
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },

  // closed routes
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/create-homework',
    element: (
      <ProtectedRoute>
        <CreateHomework />
      </ProtectedRoute>
    ),
  },
  {
    path: '/details/:id',
    element: (
      <ProtectedRoute>
        <Details />
      </ProtectedRoute>
    ),
  },
])

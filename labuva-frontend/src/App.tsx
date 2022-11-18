import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.css'
import { darkTheme, lightTheme } from './styles/theme'

// routes
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Home } from './pages/home'
import { CreateHomework } from './pages/create-homework'
import { Details } from './pages/details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/create-homework',
    element: <CreateHomework />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
])

const App = () => {
  const [theme, setTheme] = useState(false)

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

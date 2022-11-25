import { useState, useContext, useEffect } from 'react'
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
import UserContext, { UserContextProvider } from './contexts/user'

const App = () => {
  // const { userState } = useContext(UserContext)

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

  const [theme, setTheme] = useState(true)

  return (
    <UserContextProvider>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserContextProvider>
  )
}

export default App

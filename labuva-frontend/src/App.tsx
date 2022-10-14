import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.css'
import { darkTheme, lightTheme } from './styles/theme'

// routes
import { Login } from './pages/login'
import { Signup } from './pages/signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

const App = () => {
  const [test, setTheme] = useState(true)

  return (
    <ThemeProvider theme={test ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

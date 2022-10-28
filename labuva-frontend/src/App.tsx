import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.css'
import { darkTheme, lightTheme } from './styles/theme'

// routes
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Home } from './pages/home'
import { Button } from './components/button'

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
])

const App = () => {
  const [theme, setTheme] = useState(true)

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Button
        onClick={
          () => setTheme(!theme) // personalizar botão p/ ícone
        }
      >
        mudar tema
      </Button>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App

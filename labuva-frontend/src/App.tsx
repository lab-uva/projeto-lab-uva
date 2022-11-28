import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.css'
import { darkTheme, lightTheme } from './styles/theme'

import { UserContextProvider } from './contexts/user'
import { router } from './pages/routes'

const App = () => {
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

import React, { createContext, Dispatch, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/theme'

type ThemeContextProps = {
  themeState: boolean
  setTheme: Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextProps>({
  themeState: true,
  setTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children }: Props) => {
  const [themeState, setTheme] = useState(true)

  return (
    <ThemeContext.Provider value={{ themeState, setTheme }}>
      <ThemeProvider theme={themeState ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider }
export default ThemeContext

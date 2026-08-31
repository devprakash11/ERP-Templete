import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isDark: false,
})

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
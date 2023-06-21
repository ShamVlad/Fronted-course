import { useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from 'app/providers/ThemeProvider/lib/themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.Default

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)
  return (<ThemeContext.Provider value={{
    theme,
    setTheme
  }}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeProvider

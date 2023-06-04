import { FC, JSXElementConstructor, ReactElement, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./themeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.Default;

const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);
    return (<ThemeContext.Provider value={{
        theme: theme,
        setTheme: setTheme
    }}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeProvider;
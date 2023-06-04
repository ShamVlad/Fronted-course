import { createContext } from "react";

export enum Themes { 
    Default = 'default',
    Dark = 'dark'
}

export interface ThemeContextProps { 
    theme: Themes,
    setTheme: (theme: Themes) => void
}
export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeContextProps>(null)
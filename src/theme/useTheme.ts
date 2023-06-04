import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./themeContext";

export interface UseThemeResult { 
    theme: Themes,
    toggleTheme: () => void;
}

function useTheme() : UseThemeResult { 
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
      const currentTheme = theme == Themes.Dark ? Themes.Default : Themes.Dark;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
      setTheme(currentTheme);
    };

    return { theme, toggleTheme }
}

export default useTheme;
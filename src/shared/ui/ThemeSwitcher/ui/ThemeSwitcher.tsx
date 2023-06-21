import { useTheme, Themes } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonThemes } from 'shared/ui/Button'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return <Button theme={ButtonThemes.CLEAR} onClick={toggleTheme}>
        {theme === Themes.Dark ? < DarkIcon /> : <LightIcon />}
    </Button>
}

export { ThemeSwitcher }

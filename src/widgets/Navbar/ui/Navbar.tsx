import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './Navbar.module.scss'
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props

  return (
      <div className={classNames(classes.navbar, {}, [className])}>
        <div className={classes.links}>
          <AppLink
            theme={AppLinkThemes.SECONDARY}
            to="/"
            className={classes['main-link']}
          >
            Main
          </AppLink>
          <AppLink theme={AppLinkThemes.SECONDARY} to="/about">
            About
          </AppLink>
        </div>
      </div>
  )
}

export { Navbar }

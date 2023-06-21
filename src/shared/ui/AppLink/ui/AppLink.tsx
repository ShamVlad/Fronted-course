import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import styles from './AppLink.module.scss'

enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkThemes.PRIMARY,
    ...otherProps
  } = props
  return (
      <Link
        to={to}
        className={classNames(styles['app-link'], {}, [className, styles[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
  )
}

export { AppLink, AppLinkThemes }

import type { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import styles from './Button.module.scss'

export enum ButtonThemes {
    CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonThemes
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props
    return (
        <button data-testid='button-id' className={classNames(styles.button, {}, [styles[theme]])} {...otherProps}>
            {children}
        </button>
    )
}

export { Button }

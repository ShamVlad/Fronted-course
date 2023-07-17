import { classNames } from 'shared/lib/classNames'
import { Button, ButtonThemes } from 'shared/ui/Button'
import styles from './ErrorInfoPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ErrorInfoPageProps {
    className?: string
}

function ErrorInfoPage ({ className }: ErrorInfoPageProps) {
    const { t } = useTranslation('errorinfopage')
    const onReload = (): void => {
        location.reload()
    }
    return <div className={classNames(styles.index, {}, [className])}>
        <h1>{t('ErrorOccured')}</h1>
        <Button onClick={onReload} theme={ButtonThemes.CLEAR}>Reload</Button>
    </div>
}

export { ErrorInfoPage }

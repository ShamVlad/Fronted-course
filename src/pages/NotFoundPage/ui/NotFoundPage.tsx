import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

function NotFoundPage ({ className }: NotFoundPageProps) {
    const { t } = useTranslation()
    return <div className={classNames(styles.default, {}, [className])} >
        {t('NotFoundPage')}
    </div>
}

export { NotFoundPage }

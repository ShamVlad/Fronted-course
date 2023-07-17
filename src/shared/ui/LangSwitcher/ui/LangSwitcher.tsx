import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button, ButtonThemes } from 'shared/ui/Button'

export interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const [t, i18n] = useTranslation()
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return <div className={classNames('', {}, [className])}>
        <Button onClick={ toggleLang} theme={ButtonThemes.CLEAR}>
            {t('Locale')}
        </Button>
    </div>
}

export { LangSwitcher }

import { useState } from 'react'
import styles from './SideBar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
      <div
        className={classNames(
          styles.sidebar,
          { [styles.collapsed]: collapsed },
          []
        )}
      >
        <button onClick={onToggle}>Toggle</button>
        <div className={classNames(styles.switchers, {}, [])}>
          <LangSwitcher className={styles.lang} />
          <ThemeSwitcher />
        </div>
      </div>
  )
}

export { SideBar }

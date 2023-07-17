import 'app/styles/index.scss'
import useTheme from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from 'app/router'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { SideBar } from 'widgets/SideBar/ui'
import { Suspense } from 'react'

export function App (): JSX.Element {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', {}, [`${theme}`])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

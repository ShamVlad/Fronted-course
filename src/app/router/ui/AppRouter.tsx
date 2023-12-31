import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

export function AppRouter () {
    return (
        <Suspense fallback={ <PageLoader /> }>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="content-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

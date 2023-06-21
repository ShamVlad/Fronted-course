import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

export function AppRouter () {
  return (
      <Suspense fallback="...loading...">
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

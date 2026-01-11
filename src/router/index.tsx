import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routerConfig from '../config/routerConfig'
import type { DefineRoute } from '../interface/router'

const RouteApp: React.FC = () => {
  return (
    <Routes>
      {routerConfig().map((route: DefineRoute) => (
        <Route
          key={route.Path}
          path={route.Path}
          element={<route.Element />}
        />
      ))}
    </Routes>
  )
}

export default RouteApp
import React from 'react'
import { Navigate } from 'react-router-dom'
import EntityManyPage from './pages/Entity'
import EntityFormPage from './pages/Entity/[id]'

const routes = [
  { path: 'index', element: <EntityManyPage /> },
  { path: 'index/:id', element: <EntityFormPage /> },
  { path: '*', element: <Navigate to="/index" /> },
]

export default routes

import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from '../src/layouts/DashboardLayout'
import LoginView from '../src/views/auth/LoginView'
import NotFoundView from '../src/views/errors/NotFoundView'
import RegisterView from '../src/views/auth/RegisterView'
import DashboardView from '../src/views/reports/DashboardView'

import { generatePagesRoutes } from '@iteria-app/component-templates'
import * as generatedGraphql from './generated/graphql'

const filebasedRouting = import.meta.globEager('./pages/**/*Container.tsx')

const newRoutes = Object.keys(filebasedRouting).map((route) => {
  const path = route
    .replace(/\/pages|index|\.tsx$/g, '')
    .replace(/(\.\/|\/.*)/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')
  const Container = filebasedRouting[route].default ?? filebasedRouting[route]
  return { path, element: <Container /> }
})

const routing = generatePagesRoutes(generatedGraphql)
routing.push({ path: 'dashboard', element: <DashboardView /> })

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: routing,
  },
  {
    path: 'test',
    element: <DashboardLayout />,
    children: newRoutes
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]

export default routes

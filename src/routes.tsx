import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from '../src/layouts/DashboardLayout'
import MainLayout from '../src/layouts/MainLayout'
import LoginView from '../src/views/auth/LoginView'
import NotFoundView from '../src/views/errors/NotFoundView'
import RegisterView from '../src/views/auth/RegisterView'
import DashboardView from '../src/views/reports/DashboardView'

import { generatePagesRoutes } from '@iteria-app/component-templates'
import * as generatedGraphql from './generated/graphql'

const routing = generatePagesRoutes(generatedGraphql)
routing.push({ path: 'dashboard', element: <DashboardView /> })

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: routing,
  },
  {
    path: '/',
    element: <MainLayout />,
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

import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import DashboardLayout from '../src/layouts/DashboardLayout'
import NotFoundView from '../src/views/errors/NotFoundView'
import {
  DefaultLoginView,
  ResetPWView,
  SignupWithEmail,
  ErrorBoundary,
  generatePagesRoutes,
  findValueOfIndexRouteVariable,
  shouldBeIndexRoute,
} from '@iteria-app/component-templates'
import * as generatedGraphql from './generated/graphql'
import HomePage from './pages/home'
import DashboardView from './pages/dashboard'

export const filebasedRouting = import.meta.globEager('./pages/**/*.tsx')

const INDEX_PAGE = 'index.tsx'

const createPath = (route: string): string => {
  return route
    .replace(/\/pages|\.tsx$/g, '')
    .replace(/(\.\/|\/.*)/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')
}

function createContainer(
  filebasedRouting: Record<
    string,
    {
      [key: string]: any
    }
  >,
  route: string
) {
  return (
    filebasedRouting?.[route]?.default ??
    filebasedRouting?.[route]?.[0] ??
    filebasedRouting?.[route]
  )
}

// if failed it returns the same copy of list
const moveToLastPosition = (
  condition: (element: string) => boolean,
  list: readonly string[]
): string[] => {
  const foundIndex = list.findIndex(condition)
  if (foundIndex < 0) return [...list]
  const newList = [...list]
  newList.push(newList.splice(foundIndex, 1)[0])
  return newList
}

const filteredIndex = Object.keys(filebasedRouting).filter((route) =>
  route.includes(INDEX_PAGE)
)

const onlyIndexRoutes: RouteObject[] = filteredIndex.map((route) => {
  const path = createPath(route)

  const Container = createContainer(filebasedRouting, route)

  return {
    path: path,
    children: [],
    element: (
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    ),
  }
})

const detailPaths = Object.keys(filebasedRouting).filter((route) =>
  route.includes('[id].tsx')
)

const detailMainRoutes = detailPaths.map((route) => {
  const path = createPath(route) + '/:id/'

  const Container = createContainer(filebasedRouting, route)

  return {
    path: path,
    children: [],
    element: (
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    ),
  }
})

const createIndexChildrenPaths = (indexRoutePath: string) => {
  const childrenPaths = Object.keys(filebasedRouting).filter((route) => {
    const a = route.includes(indexRoutePath)
    const b = !route.includes(INDEX_PAGE) && !route.includes('[id]')
    return a && b
  })

  return childrenPaths
}

const indexRoutesWithChildren: RouteObject[] = onlyIndexRoutes.map(
  (indexRoute) => {
    const childrenPathsWithCreate = createIndexChildrenPaths(indexRoute.path)
    const childrenPaths = moveToLastPosition(
      (element) => element.includes('create.tsx'),
      childrenPathsWithCreate
    )

    const indexRouteValue = findValueOfIndexRouteVariable(
      childrenPaths?.[0],
      filebasedRouting
    )

    const childrenRoutes = childrenPaths.map((path, index) => {
      const route = path.substring(
        path.lastIndexOf('/') + 1,
        path.indexOf('.tsx')
      )

      const Container = createContainer(filebasedRouting, path)

      const indexRoute = shouldBeIndexRoute(indexRouteValue, index, route)

      return {
        path: indexRoute ? undefined : route,
        index: indexRoute,
        element: (
          <ErrorBoundary>
            <Container />
          </ErrorBoundary>
        ),
      }
    })

    return {
      ...indexRoute,
      children: childrenRoutes,
    }
  }
)

const detailRoutesWithChildren: RouteObject[] = detailMainRoutes.map(
  (detailRoute) => {
    const childrenPaths = Object.keys(filebasedRouting).filter((route) => {
      const needsToInclude = detailRoute.path.replace(':id', '[id]')
      const b = !route.includes(INDEX_PAGE) && route.includes(needsToInclude)
      return b
    })

    const childrenRoutes = childrenPaths.map((path, index) => {
      const route = path.substring(
        path.lastIndexOf('/') + 1,
        path.indexOf('.tsx')
      )

      const Container = createContainer(filebasedRouting, path)

      return {
        path: index === 0 ? undefined : route,
        index: index === 0,
        element: (
          <ErrorBoundary>
            <Container />
          </ErrorBoundary>
        ),
      }
    })

    return {
      ...detailRoute,
      children: childrenRoutes,
    }
  }
)

export const newRoutes = [
  ...indexRoutesWithChildren,
  ...detailRoutesWithChildren,
]

const routing = generatePagesRoutes(generatedGraphql)
routing.push({ path: 'dashboard', element: <DashboardView /> })
routing.push({ path: 'home', element: <HomePage /> })

const routes: RouteObject[] = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: newRoutes,
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'login', element: <DefaultLoginView /> },
      { path: 'resetpassword', element: <ResetPWView /> },
      { path: 'signup', element: <SignupWithEmail /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/home" /> },
      { path: '*', element: <NotFoundView /> },
    ],
  },
]

export default routes

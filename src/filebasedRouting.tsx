import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

// const PRESERVED = import.meta.globEager('/pages/(_app|404).tsx')
// const ROUTES = import.meta.globEager('/pages/**/[a-z[]*.tsx')

const PRESERVED = []
const ROUTES = []

const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/pages\/|\.tsx$/g, '')
  return { ...preserved, [key]: PRESERVED[file].default }
}, {})

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, component: ROUTES[route].default }
})

console.log('routes', routes, PRESERVED, ROUTES)

export const FilebasedRoutes = () => {
  const App = preserved?.['_app'] || Fragment
  const NotFound = preserved?.['404'] || Fragment
  console.log(App, 'APP')

  return (
    <App>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  )
}

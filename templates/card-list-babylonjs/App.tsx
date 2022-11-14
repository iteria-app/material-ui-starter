import { useRoutes } from 'react-router-dom'

import PropTypes from 'prop-types'
import '../src/mixins/chartjs'
import routes from './routes'

const App = () => {
  const routing = useRoutes(routes)

  return { routing }
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App

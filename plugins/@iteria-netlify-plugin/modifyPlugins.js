const fs = require('fs')

const configFactoryModifiedString = `
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackDevClientEntry = require.resolve(
  'react-dev-utils/webpackHotDevClient'
);

const reactRefreshOverlayEntry = require.resolve(
  'react-dev-utils/refreshOverlayInterop'
);

const config = configFactory('production')

config.plugins = [
  ...config.plugins,
  new ReactRefreshWebpackPlugin({
    overlay: { entry: webpackDevClientEntry, module: reactRefreshOverlayEntry, sockIntegration: false }
  })
]

const rule = config.module.rules.find(rule => rule.oneOf)
const babelLoader = rule.oneOf.find(oneOf => String(oneOf.test) === String(/\.(js|mjs|jsx|ts|tsx)$/))
if (babelLoader) babelLoader.options.plugins = [...babelLoader.options.plugins, require.resolve('react-refresh/babel')]`

exports.modifyPlugins = () => {
  //changes production env to development
  const pathToBuildFile = './node_modules/react-scripts/scripts/build.js'
  const buildFile = fs.existsSync(pathToBuildFile)

  if (buildFile) {
    let file = fs.readFileSync(pathToBuildFile, 'utf-8')

    file = file.replace("process.env.BABEL_ENV = 'production'", "process.env.BABEL_ENV = 'development'")
    file = file.replace("process.env.NODE_ENV = 'production'", "process.env.NODE_ENV = 'development'")
    file = file.replace("const config = configFactory('production');", configFactoryModifiedString)

    fs.writeFileSync(pathToBuildFile, file)
  } else {
    throw new Error(`${pathToBuildFile} not found, check your node_modules folder`)
  }
}
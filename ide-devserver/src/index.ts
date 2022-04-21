import { initializeWysiwyg } from '@iteria-app/wysiwyg/dist/index.esm.js'

import { addFrontendListeners } from './frontendListeners'
import { WindowMessaging } from './messaging'
import { DevWorkbench } from './workbench/Workbench'
import { FrontendActions } from './messaging/actions'
import { addElementHighlight } from './react-instrumentation/elementHighlight'
import { BundleWorker } from './bundler'
import { ReactInstrumentation } from './react-instrumentation'

const messagingService = new WindowMessaging(window)
const bundler = new BundleWorker(messagingService)
export const workbench = new DevWorkbench(messagingService)
export const reactInstrumentation = new ReactInstrumentation(messagingService)
export const frontendActions = new FrontendActions(messagingService)

interface IteriaProps {
  fsPort?: number
  cwd?: string
  graphQLEndpoint?: string
  features?: {
    tippy?: boolean
    generator?: boolean
    addFields?: boolean
    translations?: boolean
    themeEditor?: boolean
    graphQLEndpoint?: boolean
    floatingButton?: boolean
  }
  deploymentUrl?: string
  entryPoint?: string
  injectMode?: 'jamstack' | 'devServer'
}

export const iteriaApp = async (props?: IteriaProps) => {
  const mode = props.injectMode ?? 'jamstack'
  workbench.setMode(mode)

  if (props.fsPort) workbench.setPort(props.fsPort)
  if (props.graphQLEndpoint) workbench.setGraphQLEndpoint(props.graphQLEndpoint)
  if (props.cwd) workbench.setCwd(props.cwd)

  if (mode === 'jamstack') {
    addFrontendListeners(messagingService, mode)
    // await reactInstrumentation.setResourceHtmlElements(
    //   'https://example-material-ui.vercel.app'
    // )

    frontendActions.getProjectFromArchive(
      props?.deploymentUrl ?? window.location.origin
    )
    initializeWysiwyg()
  } else {
    initializeWysiwyg()
    addFrontendListeners(messagingService, mode)
    addElementHighlight(window, mode, props?.features)
  }
}

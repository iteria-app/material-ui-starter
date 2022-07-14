import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorView } from './ErrorView'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return { error: error, errorInfo: errorInfo }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <ErrorView />
          <details style={{ whiteSpace: 'pre-wrap', marginLeft: '10vmin' }}>
            {this.state?.error && this.state?.error.toString()}
            <br />
            {this.state?.errorInfo?.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

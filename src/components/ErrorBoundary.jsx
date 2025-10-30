import React from 'react'
import { ErrorState } from '@/components/ui/error-state.jsx'
import { Button } from '@/components/ui/button.jsx'

/**
 * ErrorBoundary component
 * Catches React errors and displays fallback UI
 */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console (could be sent to error tracking service like Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-shell" id="main-content">
          <div className="section-container">
            <ErrorState
              variant="page"
              title="Oops! Something went wrong"
              message="We encountered an unexpected error. Please try refreshing the page or return to the homepage."
              onRetry={this.handleReset}
              action={
                <Button
                  onClick={this.handleGoHome}
                  variant="primary"
                  size="default"
                >
                  Go to Homepage
                </Button>
              }
            />
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 max-w-3xl mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
                <summary className="cursor-pointer font-semibold text-red-900">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-4 text-xs text-red-800 overflow-auto">
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

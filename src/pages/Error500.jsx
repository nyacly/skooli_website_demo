import { useNavigate } from 'react-router-dom'
import { ServerCrash } from 'lucide-react'
import { ErrorState } from '@/components/ui/error-state.jsx'
import { Button } from '@/components/ui/button.jsx'

/**
 * Error 500 page - Server error
 * Displayed when a server error occurs
 */

export default function Error500() {
  const navigate = useNavigate()

  const handleRetry = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <main className="section-shell" id="main-content">
      <div className="section-container">
        <ErrorState
          variant="page"
          icon={ServerCrash}
          title="Something went wrong"
          message="We're experiencing technical difficulties. Please try again in a moment."
          onRetry={handleRetry}
          action={
            <Button
              onClick={handleGoHome}
              variant="primary"
              size="default"
            >
              Go to Homepage
            </Button>
          }
        />
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F7F5EF] px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-[#0F4C81]">404</h1>
      <p className="mt-4 max-w-lg text-base text-slate-600">
        We couldn’t find that page. Explore Skooli’s executive site from the home page instead.
      </p>
      <Button className="mt-6 rounded-md bg-[#F05A28] px-6 py-3 text-white hover:bg-[#e14a1e]" asChild>
        <Link to="/">Return home</Link>
      </Button>
    </div>
  )
}

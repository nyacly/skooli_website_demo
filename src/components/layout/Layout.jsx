import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from '../Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)] text-slate-900">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-[var(--brand-cream)] focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from '../Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--brand-cream)] text-slate-900">
      <Header />
      <main className="bg-[var(--brand-cream)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

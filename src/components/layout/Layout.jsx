import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from '../Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-slate-900">
      <Header />
      <main className="bg-[#F7F5EF]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

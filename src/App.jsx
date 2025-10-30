import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Layout = lazy(() => import('@/components/layout/Layout.jsx'))
const Home = lazy(() => import('@/pages/Home.jsx'))
const AboutUs = lazy(() => import('@/pages/AboutUs.jsx'))
const VisionImpact = lazy(() => import('@/pages/VisionImpact.jsx'))
const PartnerWithUs = lazy(() => import('@/pages/PartnerWithUs.jsx'))
const PartnerInquiry = lazy(() => import('@/pages/PartnerInquiry.jsx'))
const FundersInvestors = lazy(() => import('@/pages/FundersInvestors.jsx'))
const ForSchools = lazy(() => import('@/pages/ForSchools.jsx'))
const ForBusiness = lazy(() => import('@/pages/ForBusiness.jsx'))
const TechnologyAI = lazy(() => import('@/pages/TechnologyAI.jsx'))
const MeetTheTeam = lazy(() => import('@/pages/MeetTheTeam.jsx'))
const NewsUpdates = lazy(() => import('@/pages/NewsUpdates.jsx'))
const ContactPage = lazy(() => import('@/pages/Contact.jsx'))
const LegalEthics = lazy(() => import('@/pages/LegalEthics.jsx'))
const ShopNow = lazy(() => import('@/pages/ShopNow.jsx'))
const NotFound = lazy(() => import('@/pages/NotFound.jsx'))

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[var(--brand-cream)] text-[var(--brand-emerald)]">
    <span className="text-sm font-semibold tracking-[0.3em] uppercase">Loading experience…</span>
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop-now" element={<ShopNow />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vision-impact" element={<VisionImpact />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/partner-inquiry" element={<PartnerInquiry />} />
          <Route path="/funders" element={<FundersInvestors />} />
          <Route path="/schools" element={<ForSchools />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/technology-ai" element={<TechnologyAI />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/news" element={<NewsUpdates />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalEthics />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

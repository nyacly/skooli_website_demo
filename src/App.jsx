import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout.jsx'
import Home from '@/pages/Home.jsx'
import AboutUs from '@/pages/AboutUs.jsx'
import VisionImpact from '@/pages/VisionImpact.jsx'
import PartnerWithUs from '@/pages/PartnerWithUs.jsx'
import FundersInvestors from '@/pages/FundersInvestors.jsx'
import ForSchools from '@/pages/ForSchools.jsx'
import ForBusiness from '@/pages/ForBusiness.jsx'
import TechnologyAI from '@/pages/TechnologyAI.jsx'
import MeetTheTeam from '@/pages/MeetTheTeam.jsx'
import NewsUpdates from '@/pages/NewsUpdates.jsx'
import ContactPage from '@/pages/Contact.jsx'
import LegalEthics from '@/pages/LegalEthics.jsx'
import ShopNow from '@/pages/ShopNow.jsx'
import NotFound from '@/pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop-now" element={<ShopNow />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/vision-impact" element={<VisionImpact />} />
        <Route path="/partner" element={<PartnerWithUs />} />
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
  )
}

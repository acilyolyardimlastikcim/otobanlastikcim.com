import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { EmergencyHero } from './components/EmergencyHero';
import { ServicesBento } from './components/ServicesBento';
import { HighwayCoverageMap } from './components/HighwayCoverageMap';
import { HighwaySeoDirectory } from './components/HighwaySeoDirectory';
import { GoogleProfilesSection } from './components/GoogleProfilesSection';
import { GoogleReviewsGrid } from './components/GoogleReviewsGrid';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SeoHead } from './components/SeoHead';

// Dedicated SEO & Google Ads Landing Pages
import { KuzeyMarmaraLanding } from './pages/KuzeyMarmaraLanding';
import { KuzeyMarmaraSeyyarPage } from './pages/KuzeyMarmaraSeyyarPage';
import { KuzeyMarmaraMobilPage } from './pages/KuzeyMarmaraMobilPage';
import { OtobanLastikciLanding } from './pages/OtobanLastikciLanding';
import { OtobanSeyyarPage } from './pages/OtobanSeyyarPage';
import { OtobanMobilPage } from './pages/OtobanMobilPage';
import { YerindeTamirPage } from './pages/services/YerindeTamirPage';
import { StepneDegisimiPage } from './pages/services/StepneDegisimiPage';
import { SifirCikmaLastikPage } from './pages/services/SifirCikmaLastikPage';
import { TirKamyonLastikPage } from './pages/services/TirKamyonLastikPage';
import { HizmetlerPage } from './pages/HizmetlerPage';

// Legal & Privacy Compliance Pages
import { GizlilikPolitikasiPage } from './pages/legal/GizlilikPolitikasiPage';
import { KvkkPage } from './pages/legal/KvkkPage';
import { KullanimKosullariPage } from './pages/legal/KullanimKosullariPage';

function AppContent() {
  const { currentPath } = useRouter();

  // Route matching for dedicated Google Ads & SEO pages
  const renderRoute = () => {
    switch (currentPath) {
      case '/kuzey-marmara-lastikci':
        return <KuzeyMarmaraLanding />;
      case '/kuzey-marmara-seyyar-lastikci':
        return <KuzeyMarmaraSeyyarPage />;
      case '/kuzey-marmara-mobil-lastikci':
        return <KuzeyMarmaraMobilPage />;
      case '/otoban-lastikci':
        return <OtobanLastikciLanding />;
      case '/otoban-seyyar-lastikci':
        return <OtobanSeyyarPage />;
      case '/otoban-mobil-lastikci':
        return <OtobanMobilPage />;
      case '/hizmetler':
        return <HizmetlerPage />;
      case '/hizmetler/yerinde-lastik-tamiri':
        return <YerindeTamirPage />;
      case '/hizmetler/stepne-degisimi':
        return <StepneDegisimiPage />;
      case '/hizmetler/sifir-cikma-lastik':
        return <SifirCikmaLastikPage />;
      case '/hizmetler/tir-kamyon-lastik-tamiri':
        return <TirKamyonLastikPage />;
      case '/gizlilik-politikasi':
        return <GizlilikPolitikasiPage />;
      case '/kvkk':
        return <KvkkPage />;
      case '/kullanim-kosullari':
        return <KullanimKosullariPage />;
      default:
        // Default Home Page
        return (
          <>
            <SeoHead
              title="Kuzey Marmara & TEM Otoyolu 7/24 Mobil Lastikçi | Silivri & Çatalca"
              description="Kuzey Marmara Otoyolu (O-7), TEM (E-80), Silivri ve Çatalca'da 7/24 seyyar mobil lastikçi. 15 dakikada yerinde tamir ve stepne montajı: 0546 686 13 98."
              canonicalPath="/"
            />
            {/* SEO Emergency Hero */}
            <EmergencyHero />

            {/* 4 Core Services with links */}
            <ServicesBento />

            {/* Highway Coverage Corridors & Fast Dispatch */}
            <HighwayCoverageMap />

            {/* High-Impact SEO Corridor Directory & Exit Guides */}
            <HighwaySeoDirectory />

            {/* The 2 Registered Google Business Profiles */}
            <GoogleProfilesSection />

            {/* Verified Google Reviews */}
            <GoogleReviewsGrid />

            {/* Long-tail SEO FAQs */}
            <FAQSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      {/* Clean, Responsive Global Header */}
      <Header />

      {/* Main Content Router */}
      <main className="flex-1 pb-16 lg:pb-0">
        {renderRoute()}
      </main>

      {/* Global Clean Footer with SEO, Service & Legal Links */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

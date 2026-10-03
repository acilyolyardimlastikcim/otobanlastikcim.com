import React, { lazy, Suspense } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { EmergencyHero } from './components/EmergencyHero';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SeoHead } from './components/SeoHead';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-loaded below-the-fold components for faster initial paint
const ServicesBento = lazy(() => import('./components/ServicesBento').then(m => ({ default: m.ServicesBento })));
const HighwayCoverageMap = lazy(() => import('./components/HighwayCoverageMap').then(m => ({ default: m.HighwayCoverageMap })));
const HighwaySeoDirectory = lazy(() => import('./components/HighwaySeoDirectory').then(m => ({ default: m.HighwaySeoDirectory })));
const GoogleProfilesSection = lazy(() => import('./components/GoogleProfilesSection').then(m => ({ default: m.GoogleProfilesSection })));
const GoogleReviewsGrid = lazy(() => import('./components/GoogleReviewsGrid').then(m => ({ default: m.GoogleReviewsGrid })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Lazy-loaded page components
const KuzeyMarmaraLanding = lazy(() => import('./pages/KuzeyMarmaraLanding').then(m => ({ default: m.KuzeyMarmaraLanding })));
const KuzeyMarmaraSeyyarPage = lazy(() => import('./pages/KuzeyMarmaraSeyyarPage').then(m => ({ default: m.KuzeyMarmaraSeyyarPage })));
const KuzeyMarmaraMobilPage = lazy(() => import('./pages/KuzeyMarmaraMobilPage').then(m => ({ default: m.KuzeyMarmaraMobilPage })));
const OtobanLastikciLanding = lazy(() => import('./pages/OtobanLastikciLanding').then(m => ({ default: m.OtobanLastikciLanding })));
const OtobanSeyyarPage = lazy(() => import('./pages/OtobanSeyyarPage').then(m => ({ default: m.OtobanSeyyarPage })));
const OtobanMobilPage = lazy(() => import('./pages/OtobanMobilPage').then(m => ({ default: m.OtobanMobilPage })));
const YerindeTamirPage = lazy(() => import('./pages/services/YerindeTamirPage').then(m => ({ default: m.YerindeTamirPage })));
const StepneDegisimiPage = lazy(() => import('./pages/services/StepneDegisimiPage').then(m => ({ default: m.StepneDegisimiPage })));
const SifirCikmaLastikPage = lazy(() => import('./pages/services/SifirCikmaLastikPage').then(m => ({ default: m.SifirCikmaLastikPage })));
const TirKamyonLastikPage = lazy(() => import('./pages/services/TirKamyonLastikPage').then(m => ({ default: m.TirKamyonLastikPage })));
const HizmetlerPage = lazy(() => import('./pages/HizmetlerPage').then(m => ({ default: m.HizmetlerPage })));
const GizlilikPolitikasiPage = lazy(() => import('./pages/legal/GizlilikPolitikasiPage').then(m => ({ default: m.GizlilikPolitikasiPage })));
const KvkkPage = lazy(() => import('./pages/legal/KvkkPage').then(m => ({ default: m.KvkkPage })));
const KullanimKosullariPage = lazy(() => import('./pages/legal/KullanimKosullariPage').then(m => ({ default: m.KullanimKosullariPage })));

// Minimal fallback for lazy sections
const SectionFallback = () => <div style={{ minHeight: '200px' }} />;

function AppContent() {
  const { currentPath } = useRouter();

  const renderRoute = () => {
    switch (currentPath) {
      case '/kuzey-marmara-lastikci':
        return <Suspense fallback={<SectionFallback />}><KuzeyMarmaraLanding /></Suspense>;
      case '/kuzey-marmara-seyyar-lastikci':
        return <Suspense fallback={<SectionFallback />}><KuzeyMarmaraSeyyarPage /></Suspense>;
      case '/kuzey-marmara-mobil-lastikci':
        return <Suspense fallback={<SectionFallback />}><KuzeyMarmaraMobilPage /></Suspense>;
      case '/otoban-lastikci':
        return <Suspense fallback={<SectionFallback />}><OtobanLastikciLanding /></Suspense>;
      case '/otoban-seyyar-lastikci':
        return <Suspense fallback={<SectionFallback />}><OtobanSeyyarPage /></Suspense>;
      case '/otoban-mobil-lastikci':
        return <Suspense fallback={<SectionFallback />}><OtobanMobilPage /></Suspense>;
      case '/hizmetler':
        return <Suspense fallback={<SectionFallback />}><HizmetlerPage /></Suspense>;
      case '/hizmetler/yerinde-lastik-tamiri':
        return <Suspense fallback={<SectionFallback />}><YerindeTamirPage /></Suspense>;
      case '/hizmetler/stepne-degisimi':
        return <Suspense fallback={<SectionFallback />}><StepneDegisimiPage /></Suspense>;
      case '/hizmetler/sifir-cikma-lastik':
        return <Suspense fallback={<SectionFallback />}><SifirCikmaLastikPage /></Suspense>;
      case '/hizmetler/tir-kamyon-lastik-tamiri':
        return <Suspense fallback={<SectionFallback />}><TirKamyonLastikPage /></Suspense>;
      case '/gizlilik-politikasi':
        return <Suspense fallback={<SectionFallback />}><GizlilikPolitikasiPage /></Suspense>;
      case '/kvkk':
        return <Suspense fallback={<SectionFallback />}><KvkkPage /></Suspense>;
      case '/kullanim-kosullari':
        return <Suspense fallback={<SectionFallback />}><KullanimKosullariPage /></Suspense>;
      default:
        return (
          <>
            <SeoHead
              title="Kuzey Marmara & TEM Otoyolu 7/24 Mobil Lastikçi | Silivri & Çatalca"
              description="Kuzey Marmara Otoyolu (O-7), TEM (E-80), Silivri ve Çatalca'da 7/24 seyyar mobil lastikçi. 15 dakikada yerinde tamir ve stepne montajı: 0546 686 13 98."
              canonicalPath="/"
            />
            <EmergencyHero />
            <Suspense fallback={<SectionFallback />}>
              <ServicesBento />
              <HighwayCoverageMap />
              <HighwaySeoDirectory />
              <GoogleProfilesSection />
              <GoogleReviewsGrid />
              <FAQSection />
            </Suspense>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        {renderRoute()}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <MobileStickyBar />
      <Analytics />
      <SpeedInsights />
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

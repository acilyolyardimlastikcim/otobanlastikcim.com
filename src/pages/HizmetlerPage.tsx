import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { ServicesBento } from '../components/ServicesBento';
import { EmergencyHero } from '../components/EmergencyHero';

export const HizmetlerPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Oto Lastik Hizmetlerimiz | 7/24 Mobil Lastikçi"
        description="Kuzey Marmara, TEM ve Otoban güzergahlarında sunduğumuz 7/24 mobil lastikçi, yerinde lastik tamiri, stepne değişimi ve çıkma lastik hizmetlerimiz."
        canonicalPath="/hizmetler"
      />
      {/* We can re-use the EmergencyHero or just a simple header. Let's re-use the bento for now */}
      <div className="pt-8">
        <ServicesBento />
      </div>
    </>
  );
};

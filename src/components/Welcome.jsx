import React from 'react';
const clients = [
    { src: 'companies/microsoft-black.svg', alt: 'Microsoft' },
    { src: 'companies/sanofi-black.svg', alt: 'Sanofi' },
    { src: 'companies/inphiz-black.svg', alt: 'Inphiz' },
    { src: 'companies/rai-black.svg', alt: 'Revenue.AI' },
    { src: 'companies/kernel-black.svg', alt: 'Kernel' },
    { src: 'companies/mhp-black.svg', alt: 'MHP' },
    { src: 'companies/kyivstar-black.svg', alt: 'Kyivstar' },
    { src: 'companies/metinvest-black.svg', alt: 'Metinvest' },
    { src: 'companies/nerdio.svg', alt: 'Nerdio' },
    { src: 'companies/BudgetThuis-black.svg', alt: 'BudgetThuis' },
    { src: 'companies/SparkDynamics.svg', alt: 'SparkDynamics' },
    { src: 'companies/dbazahealth.svg', alt: 'dbazahealth' },
    { src: 'companies/setvi.svg', alt: 'setvi' },
    { src: 'companies/avantime.svg', alt: 'avantime' },
    { src: 'companies/pumb.svg', alt: 'pumb' },
    { src: 'companies/kitelytech.svg', alt: 'kitelytech' }
  ];

export default function Welcome() {
  return (
    <>
    <div>
        <div className="responsive-heading">
            <h1 className="gradient-text-1">The Future is Cloud and AI.</h1>
            <div className="gradient-text-2">We Help You Navigate It.</div>
        </div>
        <a style={{fontSize: '1.5rem', marginBottom: '2rem', display: 'block'}} href='https://devrain.com/'>Learn more about us</a>
        <div className="block xl:hidden" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                                        Transform your vision into awesome
                                        solutions with our custom software development and consulting services.
        </div>
        <div className="clients relative z-10 mb-60 last:mb-0 xl:mb-45">
        <div className="container">
        <div className="relative">
            <div className="grid grid-cols-12 relative z-10 gap-24 xl:gap-30">
            <div className="col-span-3 items-start hidden xl:grid mt-102">
                <div className="text-3xl font-semibold max-w-288">
                    Transform your vision into awesome solutions with our custom software development and consulting services.
                </div>
            </div>

            <div className="xl:pb-54 col-span-12 xl:col-span-8">
                <div className="text-3xl font-semibold mb-32">Featured Clients</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 sm:gap-x-20 md:gap-x-24 lg:gap-x-28 xl:gap-x-30 gap-y-14 md:gap-y-16">
                {clients.map(({ src, alt }) => (
                    <div key={alt} className="clients-item flex items-center justify-center h-100 bg-gray-100 p-20">
                    <img className='clients-img' src={src} alt={alt} loading="lazy" />
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    
</>
  );
}
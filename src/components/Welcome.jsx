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
        <div className="partner-block">
            <div className="partner-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path
                    d="M10 12.5018C10 12.2018 9.8 12.0018 9.5 12.0018H3.5C3.2 12.0018 3 12.2018 3 12.5018V17.5018C3 17.8018 3.2 18.0018 3.5 18.1018L9.5 18.8018C9.8 18.8018 10 18.6018 10 18.4018V12.5018ZM11.5 12.0018C11.2 12.0018 11 12.2018 11 12.5018V18.4018C11 18.7018 11.2 18.9018 11.5 19.0018L20.5 20.0018C20.8 20.0018 21 19.8018 21 19.6018V12.6018C21 12.3018 20.8 12.1018 20.5 12.1018L11.5 12.0018ZM10 4.70179C10 4.40179 9.8 4.20179 9.5 4.30179L3.5 5.00179C3.2 5.00179 3 5.20179 3 5.50179V10.5018C3 10.8018 3.2 11.0018 3.5 11.0018H9.5C9.8 11.0018 10 10.8018 10 10.5018V4.70179ZM11.5 4.10179C11.2 4.10179 11 4.40179 11 4.70179V10.6018C11 10.9018 11.2 11.1018 11.5 11.1018H20.5C20.8 11.1018 21 10.9018 21 10.6018V3.60179C21 3.30179 20.8 3.10179 20.5 3.20179L11.5 4.10179Z"
                    fill="#25272F"
                />
                </svg>
            </div>
            <div className="partner-title text-3xl">
                We are Microsoft AI Cloud Solutions Partner
            </div>
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
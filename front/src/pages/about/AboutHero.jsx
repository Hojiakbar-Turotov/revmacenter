import React from 'react';

const AboutHero = ({ title, breadcrumb, imageSrc }) => {
    return (
        <div className="mt-[70px] md:mt-[150px] relative bg-gradient-to-r from-[#EFF5F9]/80 to-[#EFF5F9]/80 h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden">
            <div className="max-w-6xl mx-auto h-full px-4 sm:px-6">
                <div className="z-10 relative flex flex-col h-full justify-between">
                    <div className="text-xs sm:text-sm text-gray-600 pt-4 sm:pt-6">
                        <span className="hover:text-blue-600 cursor-pointer">{breadcrumb?.home || 'Главная'}</span>
                        <span className="mx-2">/</span>
                        <span className="text-blue-600">{breadcrumb?.current || 'О центре'}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-4 sm:pb-6">
                        {title || 'О центре'}
                    </h1>
                </div>
                <img
                    alt="doctor"
                    className="hidden sm:block absolute bottom-0 right-0 object-cover h-[80%] md:h-auto"
                    src={imageSrc || '/aboutdoctor.png'}
                />
            </div>
        </div>
    );
};

export default AboutHero;

import React from 'react';

const AboutContent = ({ title, paragraphs }) => {
  return (
    <div className="prose max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 font-bold">
        {title || 'Revma Center Clinic — Клиника для вашего здоровья и движения'}
      </p>
      {paragraphs?.map((para, index) => (
        <p key={index} className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          {para}
        </p>
      ))}
    </div>
  );
};

export default AboutContent;

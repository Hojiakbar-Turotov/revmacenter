import React from "react";

const MapSection = ({ 
  title = "Как нас найти", 
  mapSrc = "https://yandex.uz/map-widget/v1/?ll=69.344224%2C41.368629&z=16&l=map&pt=69.344224,41.368629,pm2rdm", 
  height = "400px" 
}) => {
  return (
    <section id="map" className="pt-[90px]">
      <div className="container mx-auto px-[20px]">
        <h1 className="text-[24px] font-bold sm:text-[28px] md:text-[36px] lg:text-[42px] leading-none">
          {title}
        </h1>
        <iframe
          className="mt-[40px] mb-[20px] rounded-[15px] w-full"
          src={mapSrc}
          style={{ height }}
          allowFullScreen
          title="Yandex Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;

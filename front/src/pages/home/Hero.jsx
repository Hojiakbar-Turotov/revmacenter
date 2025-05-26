import React from "react";

const Hero = ({ title, description, buttonText, buttonLink, videoSrc, imageSrc }) => {
  return (
    <div className="relative pt-[100px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute muted  top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#780606]/80 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-end md:items-center gap-10">
          {/* Text section */}
          <div className="w-full md:w-1/2 md:pb-[150px]">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg mb-6 md:w-[550px]">{description}</p>
            <a
              href={buttonLink}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-[5px] bg-white px-4 py-2 font-medium text-red-500 transition-colors duration-1000 group"
            >
              {buttonText}
              <span className="absolute inset-0 bg-gradient-to-r from-[#780606]/0 via-[#780606]/70 to-[#780606]/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-100 opacity-0 transition-transform duration-2000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none" />
            </a>
          </div>

          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="Doctor"
              loading="lazy"
              className="w-[300px] md:w-[460px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const ServiceCard = ({ title, items, link }) => (
  <div className="bg-blue-50 rounded-lg p-6 shadow-sm flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-3 border-b pb-2">{title}</h3>
      <ul className="text-gray-800 space-y-1 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="mb-4">{item}</li>
        ))}
      </ul>
    </div>
    <a
      href={link}
      className="relative inline-flex items-center justify-center overflow-hidden rounded-[5px] bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-1000 group"
    >
      Запись на приём
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
    </a>
  </div>
);

const ServiceGrid = ({ services }) => {
  return (
    <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-20px] md:mt-[-50px] relative z-10">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          items={service.items}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;

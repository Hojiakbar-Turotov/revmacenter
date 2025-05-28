import React from "react";

const WhyUs = ({ items = [] }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center gap-4 mb-2">
                        <img src={item.icon} alt="icon" className="w-14 h-14" />
                        <h4 className="text-lg font-bold">{item.title}</h4>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WhyUs;

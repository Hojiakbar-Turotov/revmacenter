import React from "react";

const WhyUsSection = ({ title, reasons, conclusion }) => (
    <section className="max-w-7xl mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <div className={`w-6 h-6 ${item.iconColor || "text-green-600"}`}>
                            {item.icon}
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                </div>
            ))}
        </div>
        <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                {conclusion}
            </p>
        </div>
    </section>
);

export default WhyUsSection;

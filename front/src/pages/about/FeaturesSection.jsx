import React from "react";

const FeatureCard = ({ icon, title, description, iconColor = "text-indigo-600" }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all">
        <div className="flex justify-center mb-4">
            <div className={`w-6 h-6 ${iconColor}`}>{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
);

const FeaturesSection = ({ title, features }) => (
    <section className="max-w-7xl mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    </section>
);

export default FeaturesSection;

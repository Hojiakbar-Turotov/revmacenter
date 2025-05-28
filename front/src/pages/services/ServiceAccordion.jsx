import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServiceAccordion = ({ services }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section id="service-accordion" className="pt-[60px]">
            <div className="container mx-auto px-[20px] mb-[10px]">
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold">
                    Все о наших услугах
                </h1>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[10px] mx-auto px-[20px]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => toggle(index)}
                        className="bg-gradient-to-r from-[#2c0202] to-[#b20202] text-white rounded-lg px-4 py-3 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[18px] sm:text-[24px] md:text-[28px] font-[500] text-white">
                                {service.title}
                            </h3>
                            {openIndex === index ? (
                                <ChevronUp size={24} />
                            ) : (
                                <ChevronDown size={24} />
                            )}
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] mt-2' : 'max-h-0'
                                }`}
                        >
                            <p className="text-[16px] sm:text-[16px] md:text-[18px] text-white">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceAccordion;

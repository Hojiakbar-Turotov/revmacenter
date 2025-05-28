const ServiceStatistics = ({ stats }) => {
    return (
        <section id="service-statistics" className="pt-[60px]">
            <div className="container mx-auto px-[20px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[50px] bg-gradient-to-r from-[#F0F6F9] to-[#F0F6F9] p-[20px] sm:p-[30px] xl:p-[60px] rounded-[12px]">
                    {stats.map((item, index) => (
                        <div key={index} className="mb-[30px] lg:mb-0">
                            <img alt={item.alt || 'icon'} src={item.icon} />
                            <span className="inline-block text-[22px] font-bold mt-[10px] text-[#017CC1]">
                                {item.value}
                            </span>
                            <p className="text-[14px] lg:text-[16px] max-w-[260px]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceStatistics;

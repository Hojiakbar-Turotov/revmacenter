import React from "react";

const ContactInfo = ({ pageTitle, sectionTitle, breadcrumbs, contacts }) => {
    return (
        <div className=" mt-[70px] md:mt-[150px] container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumbs */}
            <ul className="flex gap-[5px] items-center">
                {breadcrumbs.map((item, index) => (
                    <li key={index} className="flex flex-col">
                        {item.href ? (
                            <a className="text-[#353535]" href={item.href}>
                                {item.label}
                                <span className="block h-[1px] -mt-1 pt-0 bg-[#353535]"></span>
                            </a>
                        ) : (
                            <span className="text-[#35353599]">{item.label}</span>
                        )}
                    </li>
                ))}
            </ul>

            {/* Title */}
            <h1 className="text-[36px] sm:text-[48px] font-bold mt-[30px]">{pageTitle}</h1>

            {/* Subtitle */}
            <h2 className="text-[24px] sm:text-[32px] text-[#00578A] mt-[40px] font-bold">
                {sectionTitle}
            </h2>

            {/* Contacts */}
            <ul className="grid sm:grid-cols-2 gap-[20px] lg:flex justify-between mt-[40px]">
                {contacts.map((item, index) => (
                    <li key={index} className="flex flex-col">
                        <span className="text-[18px]">{item.label}</span>
                        {item.type === "text" ? (
                            <span className="text-[18px] xl:text-[22px] font-[700]">
                                {item.value}
                            </span>
                        ) : (
                            <a
                                className="text-[18px] xl:text-[22px] font-[700]"
                                href={item.href}
                                target={item.target || "_self"}
                            >
                                {item.value}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactInfo;

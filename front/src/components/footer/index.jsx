import React, { useState } from "react";
import WatsapIcon from "../navbar/WatsapIcon";

const Footer = ({
    logoSrc = "https://www.revmacenter.uz/LOGO.svg",
    phoneNumbers = ["+998(99) 818-01-11", "+998(99) 818-01-11"],
    address = "Кибрайский район Университетская ул., 5/1",
    workHours = {
        weekdays: "понедельник-пятница: 08:00‑18:00",
        saturday: "суббота: 08:00‑14:00",
    },
    whatsappLink = "https://wa.me/998998180111",
    telegramLink = "https://t.me/revma_center_clinic",
    callbackLink = "/contact",
    qrCodeSrc = "https://www.revmacenter.uz/krcode.png",
    navLinks = [
        { href: "/", label: "Главная" },
        { href: "/services", label: "Услуги" },
        { href: "/doctors", label: "Врачи" },
        { href: "/reviews", label: "Отзывы" },
        { href: "/about", label: "О центре" },
        { href: "/contact", label: "Контакты" },
    ],
}) => {
    const [qrEnlarged, setQrEnlarged] = useState(false);
    return (
        <footer className="bg-[#F0F6F9] pt-8 pb-8 mt-4">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between">
                    {/* Logo (Desktop) */}
                    <a href="/" className="hidden lg:flex w-[220px] max-w-[300px] h-[73px] items-center" data-discover="true">
                        <img src={logoSrc} alt="logo" loading="lazy" className="w-full" />
                    </a>

                    {/* Nav Links */}
                    <ul className="flex flex-wrap items-center gap-5 xl:gap-[70px]">
                        {/* Logo (Mobile) */}
                        <a href="/" className="flex lg:hidden w-[200px] max-w-[300px] h-[73px] items-center" data-discover="true">
                            <img src={logoSrc} alt="logo" loading="lazy" className="w-full" />
                        </a>

                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} className="font-bold inline-block" data-discover="true">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="bottom-footer mt-5 xl:mt-2 container mx-auto px-5">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between gap-2 sm:gap-5">
                    {/* Social Links */}
                    <li className="flex flex-col gap-4 lg:gap-2">
                        <a href={whatsappLink} className="flex items-center gap-3 text-[#25D366] text-lg" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <WatsapIcon />
                            <span>
                                <span className="hidden sm:inline">Написать в </span>Whatsapp
                            </span>
                        </a>

                        <a href={telegramLink} className="flex items-center gap-3 text-blue-400 text-lg" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                            </svg>
                            <span>
                                <span className="hidden sm:inline">Написать в </span>Telegram
                            </span>
                        </a>
                    </li>

                    {/* Phone numbers */}
                    <li className="flex flex-col gap-2 sm:gap-0 justify-center">
                        {phoneNumbers.map((phone, idx) => (
                            <a key={idx} href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="text-[18px] font-medium">
                                {phone}
                            </a>
                        ))}
                    </li>

                    {/* Address & work time */}
                    <li className="flex flex-col gap-3 justify-center">
                        <a href="#map" className="underline">{address}</a>
                        <span className="flex flex-col text-[14px] sm:text-[16px] gap-1">
                            <span>{workHours.weekdays}</span>
                            <span>{workHours.saturday}</span>
                        </span>
                    </li>

                    {/* Callback button */}
                    <li className="lg:flex items-center justify-center">
                        <a
                            href={callbackLink}
                            className="max-w-[272px] px-5 h-[46px] flex items-center justify-center bg-red-600 rounded-[5px] hover:text-white hover:bg-red-700"
                            data-discover="true"
                        >
                            Заказать обратный звонок
                        </a>
                    </li>

                    {/* QR Code */}
                    <li className="flex flex-col gap-2 justify-center items-center">
                        <img
                            src={qrCodeSrc || "/krcode.png"}
                            alt="krcode"
                            className={`w-[100px] h-[100px] cursor-pointer transition-transform duration-300 ease-in-out ${qrEnlarged ? "scale-[300%] -translate-y-20 lg:-translate-x-20" : "scale-100 translate-y-0 lg:-translate-x-0"
                                }`}
                            onClick={() => setQrEnlarged(!qrEnlarged)}
                            title={qrEnlarged ? "Кликните, чтобы уменьшить" : "Кликните, чтобы увеличить"}
                        />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

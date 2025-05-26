// src/components/NavFunc.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import WatsapIcon from "./WatsapIcon";

export default function NavFunc({
    logoSrc,
    phone,
    whatsapp,
    email,
    address,
    schedule,
    navLinks,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // menyu holati
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('hello')
    };

    return (
        <header className="bg-[#FCFCFC] fixed top-0 w-full px-[20px] pb-[10px] z-[1000]">
            {/* Top nav */}
            <nav className="flex items-center justify-between gap-[20px] container mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="w-[220px] sm:max-w-[300px] h-[73px] flex items-center"
                >
                    <img className="w-full" src={logoSrc} alt="logo" loading="lazy" />
                </Link>

                {/* Right content */}
                <ul className="flex items-center gap-[20px] lg:gap-[60px] text-[12px]">
                    {/* Phone and WhatsApp */}
                    <li className="sm:flex flex-col sm:w-[170px]">
                        <a className="font-bold" href={`tel:${phone}`}>
                            <span className="hidden sm:inline-block">{phone}</span>
                            <span className="sm:hidden">📞</span>
                        </a>
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            className="hidden sm:flex items-center gap-[10px]"
                        >
                            <span className="text-[22px] text-[#25D366]"><WatsapIcon /></span>
                            <span>Whatsapp</span>
                        </a>
                    </li>

                    {/* Email and callback link */}
                    <li className="flex-col hidden lg:inline-block xl:flex">
                        <a className="block" href={`mailto:${email}`}>
                            {email}
                        </a>
                        <NavLink className="block" to="/contact">
                            Заказать звонок
                        </NavLink>
                    </li>

                    {/* Address */}
                    <li className="flex-col hidden lg:inline-block xl:flex">
                        <span className="block">{address?.region}</span>
                        <span className="block">{address?.street}</span>
                    </li>

                    {/* Work schedule */}
                    <li className="hidden lg:flex flex-col">
                        {schedule?.map((item, i) => (
                            <span key={i} className="block">
                                {item}
                            </span>
                        ))}
                    </li>

                    {/* Mobile menu icon */}
                    <li className="flex items-center gap-[5px]  lg:hidden">
                        <button onClick={toggleMenu} className="flex flex-col gap-[4px] w-6 h-6 relative mr-6">
                            <span
                                className={`absolute h-[2px] w-full bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 top-1/2 translate-y-[-50%]" : "top-0"
                                    }`}
                            />
                            <span
                                className={`absolute h-[2px] w-full bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "top-1/2"
                                    }`}
                            />
                            <span
                                className={`absolute h-[2px] w-full bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 bottom-1/2 translate-y-[50%]" : "bottom-0"
                                    }`}
                            />
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Bottom nav */}
            <nav className="container shadow-md mx-auto h-[60px] hidden lg:flex items-center justify-between rounded-[5px] px-[20px] bg-white">
                {/* Nav links */}
                <ul className="flex items-center lg:gap-[30px] xl:gap-[60px]">
                    {navLinks?.map((link, i) => (
                        <li key={i}>
                            <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                    `font-bold inline-block ${isActive ? "text-red-600" : ""}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Contact button */}
                <ul className="flex items-center gap-[10px]">
                    <li>
                        <NavLink
                            to="/contact"
                            className="relative inline-flex w-[196px] h-[46px] items-center justify-center overflow-hidden rounded-[5px] bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-1000 group"
                        >
                            Запись на приём
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {
                isMenuOpen ? <MobileMenu
                phone="+998(99) 818-01-11"
                whatsapp="998998180111"
                email="revmacenter01@gmail.com"
                address={{ region: "Кибрайский район", street: "Университетская ул., 5/1." }}
                schedule={["понедельник-пятница: 08:00‑18:00", "суббота: 08:00‑14:00"]}
                navLinks={[
                    { label: "Главная", href: "/" },
                    { label: "Услуги", href: "/services" },
                    { label: "Врачи", href: "/doctors" },
                    { label: "Отзывы", href: "/reviews" },
                    { label: "О центре", href: "/about" },
                    { label: "Контакты", href: "/contact" },
                ]}
            /> : ''
            }

        </header>
    );
}

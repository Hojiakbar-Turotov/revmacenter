import { Link, NavLink } from "react-router-dom";

export default function NavFunc({ logoSrc, phone, whatsapp, email, address, schedule, navLinks }) {
    return (
        <header className="bg-[#FCFCFC] fixed top-0 w-full px-[20px] pb-[10px] z-[1000]">
            {/* Top nav */}
            <nav className="flex items-center justify-between gap-[20px] container mx-auto">
                <Link to="/" className="w-[220px] sm:max-w-[300px] h-[73px] flex items-center">
                    <img className="w-full" alt="logo" loading="lazy" src={logoSrc} />
                </Link>
                <ul className="flex items-center gap-[20px] lg:gap-[60px]">
                    {/* Phone */}
                    <li className="sm:flex flex-col sm:w-[170px]">
                        <a className="text-[18px] font-bold" href={`tel:${phone}`}>
                            <span className="hidden sm:inline-block">{phone}</span>
                            <span className="sm:hidden">📞</span>
                        </a>
                        <a href={`https://wa.me/${whatsapp}`} className="hidden sm:flex item-center gap-[10px]">
                            <span className="text-[22px] text-[#25D366]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[22px] text-[#25D366]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path></svg></span>
                            <span>Whatsapp</span>
                        </a>
                    </li>

                    {/* Email and callback */}
                    <li className="flex-col hidden xl:flex">
                        <a href={`mailto:${email}`}>{email}</a>
                        <NavLink to="/contact">Заказать звонок</NavLink>
                    </li>

                    {/* Address */}
                    <li className="flex-col hidden xl:flex">
                        <span>{address.region}</span>
                        <span>{address.street}</span>
                    </li>

                    {/* Schedule */}
                    <li className="hidden xl:flex flex-col">
                        {schedule.map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </li>

                    {/* Mobile button */}
                    <li className="flex items-center gap-[5px]">
                        <button className="menu-btn lg:hidden">
                            <span></span><span></span><span></span>
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Bottom nav */}
            <nav className="container shadow-md mx-auto h-[60px] hidden lg:flex items-center justify-between rounded-[5px] px-[20px] bg-white">
                <ul className="flex items-center lg:gap-[30px] xl:gap-[60px]">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <NavLink to={link.href} className="font-bold inline-block" activeClassName="active">
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
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
        </header>
    );
}

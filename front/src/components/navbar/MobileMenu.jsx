import { Link, NavLink } from "react-router-dom";
import WatsapIcon from "./WatsapIcon";

export default function MobileMenu({ phone, whatsapp, email, address, schedule, navLinks }) {
    return (
        <div className="
            fixed top-[83px] lg:top-[143px] w-full z-50 
            bg-[#FFD9D9] transition-all duration-300 ease-in-out 
            opacity-100 pointer-events-auto
        ">
            {/* Upper Grid */}
            <ul className="grid sm:grid-cols-3  p-[10px] container mx-auto items-center gap-[20px] lg:gap-[60px]">
                {/* Phone & Whatsapp */}
                {/* <li className="flex md:flex-col gap-[10px]">
                    <a className="text-[16px] font-bold" href={`tel:${phone}`}>{phone}</a>
                    <a href={`https://wa.me/${whatsapp}`} className="flex items-center gap-[10px]">
                        <span className=" text-[#25D366]"><WatsapIcon /></span>
                        <span>Whatsapp</span>
                    </a>
                </li> */}

                {/* Email & Call order */}
                <li className="flex flex-col gap-[10px] xl:flex">
                    <a href={`mailto:${email}`}>{email}</a>
                    <NavLink to="/contact">Заказать звонок</NavLink>
                </li>

                {/* Address */}
                <li className="flex flex-col gap-[10px] xl:flex ">
                    <span>{address?.region}</span>
                    <span>{address?.street}</span>
                </li>

                {/* Schedule */}
                <li className="flex flex-col gap-[10px] ">
                    {schedule.map((item, idx) => (
                        <span key={idx}>{item}</span>
                    ))}
                </li>
            </ul>

            {/* Navigation Links */}
            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7  p-[10px]  container mx-auto items-center gap-[20px]">
                {navLinks.map((link, idx) => (
                    <li key={idx}>
                        <NavLink to={link.href} className={({ isActive }) =>
                            isActive ? "text-red-600 font-bold inline-block" : "text-black font-bold inline-block"
                        }>
                            {link.label}
                        </NavLink>
                    </li>
                ))}

                {/* Language selector */}
                {/* <li>
                    <select className="outline-0 text-gray-900 w-[70px] border border-gray-700 hover:border-blue-500 rounded-md p-1">
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>
                </li> */}

                {/* Button */}
                <li>
                    <NavLink
                        to="/contact"
                        className="max-w-[140px] md:w-[300px] h-[46px] flex items-center justify-center bg-[#111E52] rounded-[5px] text-white"
                    >
                        <span className="hidden sm:block">Запись на приём</span>
                        <span className="block sm:hidden">Записаться</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

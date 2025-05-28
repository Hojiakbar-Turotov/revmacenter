import React from "react";
import { Link } from "react-router-dom";

const DoctorsSection = ({ doctors }) => {
    return (
        <section id="doctors" className="pt-[140px]">
            <div className="container mx-auto px-5">
                <ul className="flex gap-1 items-center">
                    <li className="flex flex-col">
                        <Link to="/" className="text-[#353535]">
                            Главная
                            <span className="block h-[1px] -mt-1 bg-[#353535]" />
                        </Link>
                    </li>
                    <li className="flex flex-col">/</li>
                    <li className="text-[#35353599]">Врачи</li>
                </ul>

                <h1 className="mt-[30px] mb-5 text-[28px] sm:text-[32px] lg:text-[42px] font-bold">
                    Врачи
                </h1>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="rounded-[4px] max-w-[400px] w-full overflow-hidden mx-auto relative"
                        >
                            <div className="relative rounded-[4px] overflow-hidden mb-[5px]">
                                <div className="absolute bg-black/20 w-full h-full"></div>
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-[350px] object-cover"
                                />
                                <p className="text-[22px] absolute bottom-[40px] left-[10px] text-red-600 font-bold pt-[10px]">
                                    {doctor.name}
                                </p>
                                <p className="font-bold absolute bottom-[10px] left-[10px] mb-[5px] text-gray-900">
                                    {doctor.specialty}
                                </p>
                            </div>
                            <div className="flex flex-col justify-between h-[124px]">
                                <Link
                                    to="/contact"
                                    className="relative inline-flex items-center justify-center h-[54px] w-full rounded-[5px] bg-red-600 font-medium text-white transition-colors duration-1000 group"
                                >
                                    Запись на приём
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 -translate-x-[100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%] group-hover:opacity-100 pointer-events-none"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;

// components/PopularServices.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PopularServices({ services }) {
    return (
        <section id="services" className="mt-[90px]">
            <div className="container mx-auto px-5">
                <div className="relative">
                    <h1 className="text-[24px] sm:text-[36px] md:text-[42px] mb-5 font-bold">
                        Популярные услуги
                    </h1>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom group hover:bg-[#017CC1] transition-colors duration-500 text-white border-none outline-none w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden top-[35px] right-[60px] z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full text-4xl">
                        <ChevronLeft className="text-[#017CC1] group-hover:text-white transition-colors duration-500 text-[24px]" />
                    </button>
                    <button className="swiper-button-next-custom group hover:bg-[#017CC1] transition-colors duration-500 text-white border-none outline-none w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden top-[35px] right-0 z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full text-4xl">
                        <ChevronRight className="text-[#017CC1] group-hover:text-white transition-colors duration-500" />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-md bg-[#F0F6F9] max-w-[350px] w-full h-[424px] overflow-hidden mx-auto flex flex-col justify-between relative">
                                    <img src={service.image} alt={service.title} className="w-full h-[224px]" />
                                    <div className="px-4 h-[200px] pb-5 flex flex-col justify-between">
                                        <p className="py-2 text-[20px] font-bold mt-5">{service.title}</p>
                                        <a
                                            href="/contact"
                                            className="relative inline-flex items-center justify-center overflow-hidden rounded-[5px] bg-red-600 h-[54px] w-full font-medium text-white transition-colors duration-1000 group"
                                        >
                                            Запись на приём
                                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

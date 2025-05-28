import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import AutoplayProgress from './AutoplayProgress';
import { useState } from 'react';

const ServiceSlide = ({ title, subtitle, description, imageSrc }) => (
    <div className="flex items-center justify-center h-[120vh] md:h-[75vh] pt-[20px] md:pt-0 bg-[#F0F6F9]">
        <div className="container mx-auto px-[20px]">
            <ul className="flex gap-[5px] items-center mt-[60px] md:mt-0 mb-[20px] md:mb-0 lg:pt-[60px]">
                <li className="flex flex-col">
                    <a className="text-[#353535]" href="/">
                        Главная<span className="block h-[1px] -mt-1 bg-[#353535]"></span>
                    </a>
                </li>
                <li className="flex flex-col">/</li>
                <li className="text-[#35353599]">Услуги</li>
            </ul>
            <div className="flex flex-col gap-[60px] md:gap-[20px] md:flex-row items-center justify-between">
                <div className="w-full md:w-[50%]">
                    <h1 className="text-[18px] mb-[40px] font-bold text-[#00578A] uppercase">{title}</h1>
                    <h2 className="text-[36px] font-[600] leading-[48px] max-w-[650px] mb-[10px]">{subtitle}</h2>
                    <p className="text-[18px] max-w-[600px] mb-[40px]">{description}</p>
                    <a
                        href="/contact"
                        className="relative text-white bg-red-600 inline-flex items-center justify-center overflow-hidden rounded-[5px] max-w-[204px] h-[54px] w-full font-medium transition-colors duration-1000 group"
                    >
                        Записаться
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-100 pointer-events-none"></span>
                    </a>
                </div>
                <img className="w-full md:w-[50%]" src={imageSrc} alt={title} />
            </div>
        </div>
    </div>
);

const ServicesHeroSlider = ({ slides }) => {
    const [timeLeft, setTimeLeft] = useState(8);
    const [progress, setProgress] = useState(0);
    return (
        <section id="services-hero" className="relative w-full h-full mt-[60px] lg:mt-[120px]">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={{ delay: 8000 }}
                modules={[Navigation, Autoplay]}
                className="w-full h-full"
                onAutoplayTimeLeft={(_, time, progress) => {
                    setTimeLeft(Math.ceil(time / 1000));
                    setProgress(progress);
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <ServiceSlide {...slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <AutoplayProgress timeLeft={timeLeft} progress={progress} />
        </section>
    );
};

export default ServicesHeroSlider;

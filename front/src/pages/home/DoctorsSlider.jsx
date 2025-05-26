import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DoctorsSlider = ({ doctors }) => {
  return (
    <section id="doctors" className="pt-[90px] pb-[60px]">
      <div className="container mx-auto px-[20px]">
        <div className="relative">
          <h1 className="text-[24px] sm:text-[34px] md:text-[42px] mb-[20px] font-[700]">
            Врачи медицинского центра
          </h1>

          {/* Custom navigation buttons */}
          <button className="swiper-button-prev-custom1 group hover:bg-[#017CC1] transition-colors duration-500 w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden sm:right-[60px] top-[35px] z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full">
            <svg
              className="text-[#017CC1] group-hover:text-white text-[24px] transition-colors duration-500"
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="swiper-button-next-custom1 group hover:bg-[#017CC1] transition-colors duration-500 w-[52px] h-[52px] sm:flex items-center justify-center absolute hidden sm:right-0 top-[35px] z-10 -translate-y-1/2 bg-[#EAF6FF] rounded-full">
            <svg
              className="text-[#017CC1] group-hover:text-white text-[24px] transition-colors duration-500"
              fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Swiper component */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom1',
              prevEl: '.swiper-button-prev-custom1',
            }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <a
                  href="/doctors"
                  className="relative mx-auto flex items-center justify-center overflow-hidden rounded-[5px] bg-black/30 hover:bg-red-500 max-w-[400px] font-medium text-white transition-colors duration-1000 group"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-[224px] object-cover"
                  />
                  <div className="px-4 flex flex-col justify-between h-[200px] pb-[20px]">
                    <p className="text-[20px] font-bold mt-[20px]">{doctor.name}</p>
                    <span className="text-[#017CC1] mb-[12px]">{doctor.specialty}</span>
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 -translate-x-full translate-y-full rotate-45 scale-150 opacity-0 transition-transform duration-1000 ease-out group-hover:translate-x-[150%] group-hover:-translate-y-[150%] group-hover:opacity-100 pointer-events-none"></span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSlider;

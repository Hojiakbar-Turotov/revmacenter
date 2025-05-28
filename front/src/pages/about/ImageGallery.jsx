import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const ImageGallery = ({ images = [] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
            {/* Main Swiper */}
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mb-4"
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[200px] sm:h-[350px] md:h-[500px] object-cover rounded"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mt-2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[80px] sm:h-[100px] md:h-[150px] object-cover rounded cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageGallery;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const BlogSection = ({ posts }) => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Блог от наших специалистов
      </h1>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,               // Delay juda kichik, uzluksiz harakat uchun
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}              // Harakat davomiyligi (ms)
        freeMode={{
          enabled: true,
          momentum: false,        // Momentumni o'chirish (tekis harakat uchun)
        }}
        grabCursor={true}         // Sichqoncha kursorini o'zgartirish uchun
      >
        {posts.map((post, idx) => (
          <SwiperSlide key={idx}>
            <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <small className="text-gray-500">{post.readTime}</small>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogSection;

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialSlider = ({ data }) => (
  <section className="bg-white py-14 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          What Our Customers Are Saying
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We&apos;ve helped thousands improve their mental well-being. Here&apos;s what they say:
        </p>
      </div>

      <div className="mt-14">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-6 bg-gray-100 rounded-2xl shadow-lg h-full hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 rounded-full mr-4 border border-gray-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed">
                  “{item.testimoni}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

TestimonialSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      testimoni: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TestimonialSlider;

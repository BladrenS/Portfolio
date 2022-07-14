import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import './slider.css';
import cat1 from '../../assets/кытя.webp'
import cat2 from '../../assets/кытя2.webp'
import cat3 from '../../assets/кытя3.webp'
import cat4 from '../../assets/кытя4.webp'


const Slider = () => {


   return (
      <div className="slider">
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
               delay: 10000,
               disableOnInteraction: false
           }}
            pagination={{ clickable: true }}
         >
            <SwiperSlide>
               <div className="slide__inner">
                  <div className="slide__image">
                     <img className='image' src={cat1} alt="" />
                  </div>
                  <div className="slide__info">
                     <div className="info__testimonial">
                        Love the simplicity of the service and the prompt customer support. We can`t imagine working without it.
                     </div>
                     <div className="info__name">
                        Olivia Doe
                     </div>
                     <div className="info__prof">
                        Head of Design, Google
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>               
               <div className="slide__inner">
                  <div className="slide__image">
                     <img className='image' src={cat2} alt="" />
                  </div>
                  <div className="slide__info">
                     <div className="info__testimonial">
                        Пожалуйсту, примите меня на работу!!! :D
                     </div>
                     <div className="info__name">
                        Denis Gorbunov
                     </div>
                     <div className="info__prof">
                        Пчёлка - трутень
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>               
               <div className="slide__inner">
                  <div className="slide__image">
                     <img className='image' src={cat3} alt="" />
                  </div>
                  <div className="slide__info">
                     <div className="info__testimonial">
                        Love the simplicity of the service and the prompt customer support. We can`t imagine working without it.
                     </div>
                     <div className="info__name">
                        Olivia Doe
                     </div>
                     <div className="info__prof">
                        Head of Design, Google
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>               
               <div className="slide__inner">
                  <div className="slide__image">
                     <img className='image' src={cat4} alt="" />
                  </div>
                  <div className="slide__info">
                     <div className="info__testimonial">
                        Love the simplicity of the service and the prompt customer support. We can`t imagine working without it.
                     </div>
                     <div className="info__name">
                        Olivia Doe
                     </div>
                     <div className="info__prof">
                        Head of Design, Google
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Slider;
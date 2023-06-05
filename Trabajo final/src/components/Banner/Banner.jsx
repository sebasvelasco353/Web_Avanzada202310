import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function Banner() {
  const bannerImgs = [
    require('./assets/1.png'),
    require('./assets/2.png')
  ]

  return (
    <div className='banner' data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs, Autoplay]}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
      >
        {bannerImgs.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="Slider Images" className='product-img-slider' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner

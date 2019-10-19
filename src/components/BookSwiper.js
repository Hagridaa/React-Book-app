import React from 'react';
import Swiper from 'react-id-swiper';

import aivoruokaa from '../kuvat/aivoruokaa.jpg'
 
const BookSwiper = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
 
  return(
    <Swiper {...params}>
      <div><img src={aivoruokaa} alt="aivoruokaa" /></div>
      <div><img src={aivoruokaa} alt="aivoruokaa"/></div>
      <div><img src={aivoruokaa} alt="aivoruokaa"/></div>
      <div><img src={aivoruokaa} alt="aivoruokaa"/></div>
      <div><img src={aivoruokaa} alt="aivoruokaa"/></div>
    </Swiper>
  )
}
 
export default BookSwiper;
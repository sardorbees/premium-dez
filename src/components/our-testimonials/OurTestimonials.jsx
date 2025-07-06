import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'

import start from '../assents/img/sta/2107957.png'
function OurTestimonials() {
    return (
        <div class="our-testimonials">
            <div class="container">
                <div class="row section-row">
                    <div class="col-lg-12">

                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">отзывы</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Сотни людей доверяют нам надежность <span>решения для борьбы с вредителями</span></h2>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">

                        <div class="testimonial-slider">
                            <div class="swiper">
                                <div class="swiper-wrapper" data-cursor-text="Drag">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <SwiperSlide>
                                            <div class="swiper-slide">
                                                <div class="testimonial-item">
                                                    <div class="testimonial-author">
                                                        <div class="author-image">
                                                            <figure class="image-anime">
                                                                <img src="images/author-1.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div class="author-content">
                                                            <h3>Сергей </h3>
                                                        </div>
                                                    </div>
                                                    <div class="testimonial-rating">
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                    </div>
                                                    <div class="testimonial-content">
                                                        <p>Все отлично. Тараканов больше нет. Спасибо Вам большое. Специально ждал чтоб оставить отзыв. Прошло дней 10 с момента обработки. В первые дни еще бегали а сейчас не одного.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="swiper-slide">
                                                <div class="testimonial-item">
                                                    <div class="testimonial-author">
                                                        <div class="author-image">
                                                            <figure class="image-anime">
                                                                <img src="images/author-1.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div class="author-content">
                                                            <h3>Дарья </h3>
                                                        </div>
                                                    </div>
                                                    <div class="testimonial-rating">
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                    </div>
                                                    <div class="testimonial-content">
                                                        <p>Огромное спасибо Вам Дамир! Для меня это трагедия эти ужасные клопы.... Вторая неделя все спокойно!всем рекомндую</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="swiper-slide">
                                                <div class="testimonial-item">
                                                    <div class="testimonial-author">
                                                        <div class="author-image">
                                                            <figure class="image-anime">
                                                                <img src="images/author-1.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div class="author-content">
                                                            <h3>Иброхим </h3>
                                                        </div>
                                                    </div>
                                                    <div class="testimonial-rating">
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                    </div>
                                                    <div class="testimonial-content">
                                                        <p>Спасибо вам ребята</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class="swiper-slide">
                                                <div class="testimonial-item">
                                                    <div class="testimonial-author">
                                                        <div class="author-image">
                                                            <figure class="image-anime">
                                                                <img src="images/author-1.jpg" alt="" />
                                                            </figure>
                                                        </div>
                                                        <div class="author-content">
                                                            <h3>Евгений </h3>
                                                        </div>
                                                    </div>
                                                    <div class="testimonial-rating">
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                        <img src={start} alt="" width={20} />
                                                    </div>
                                                    <div class="testimonial-content">
                                                        <p>Отличный сервис, приятные сотрудники, сделали качественно и быстро. Спасибо</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div class="testimonial-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurTestimonials;
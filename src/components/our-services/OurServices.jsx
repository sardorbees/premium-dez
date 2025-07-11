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
import icon from '../assents/img/logo-owl/1.jpg'
import icon1 from '../assents/img/logo-owl/2.jpg'
import icon2 from '../assents/img/logo-owl/3.jpg'
import icon3 from '../assents/img/logo-owl/41.jpg'

import logo from '../assents/img/owl/1.svg'
import logo1 from '../assents/img/owl/2.svg'
import logo2 from '../assents/img/owl/3.svg'
import logo3 from '../assents/img/owl/4.svg'
function OurServices() {
    return (
        <div class="our-services light-bg-section">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-12">

                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">услуги</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque"><span>Экспертные решения для каждого </span><span>вредитель
                                проблема</span></h2>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">

                        <div class="services-slider">
                            <div class="swiper">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide>
                                        <div class="swiper-slide">

                                            <div class="service-item">

                                                <div class="service-image">
                                                    <a href="service-single.html" data-cursor-text="View">
                                                        <figure class="image-anime">
                                                            <img src={icon} alt="" />
                                                        </figure>
                                                    </a>
                                                </div>

                                                <div class="service-body">
                                                    <div class="icon-box">
                                                        <img src={logo} alt="" />
                                                    </div>
                                                    <div class="service-content">
                                                        <h3><a href="/contact">Коммерческие решения по борьбе с вредителями</a></h3>
                                                        <p>Индивидуальные решения для защиты вашего дома от распространенных вредителей.</p>
                                                    </div>
                                                    <div class="service-btn">
                                                        <a href="/contact" class="readmore-btn">читать далее</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="swiper-slide">

                                            <div class="service-item">

                                                <div class="service-image">
                                                    <a href="service-single.html" data-cursor-text="View">
                                                        <figure class="image-anime">
                                                            <img src={icon1} alt="" />
                                                        </figure>
                                                    </a>
                                                </div>

                                                <div class="service-body">
                                                    <div class="icon-box">
                                                        <img src={logo1} alt="" />
                                                    </div>
                                                    <div class="service-content">
                                                        <h3><a href="service-single.html">Борьба с термитами и грызунами</a></h3>
                                                        <p>Индивидуальные решения для защиты вашего дома от распространенных вредителей.</p>
                                                    </div>
                                                    <div class="service-btn">
                                                        <a href="/contact" class="readmore-btn">читать далее</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="swiper-slide">

                                            <div class="service-item">

                                                <div class="service-image">
                                                    <a href="service-single.html" data-cursor-text="View">
                                                        <figure class="image-anime">
                                                            <img src={icon2} alt="" />
                                                        </figure>
                                                    </a>
                                                </div>

                                                <div class="service-body">
                                                    <div class="icon-box">
                                                        <img src={logo2} alt="" />
                                                    </div>
                                                    <div class="service-content">
                                                        <h3><a href="service-single.html">Интеграция с умным домом</a></h3>
                                                        <p>Индивидуальные решения для защиты вашего дома от распространенных вредителей.</p>
                                                    </div>
                                                    <div class="service-btn">
                                                        <a href="/contact" class="readmore-btn">читать далее</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div class="swiper-slide">

                                            <div class="service-item">

                                                <div class="service-image">
                                                    <a href="service-single.html" data-cursor-text="View">
                                                        <figure class="image-anime">
                                                            <img src={icon3} alt="" />
                                                        </figure>
                                                    </a>
                                                </div>

                                                <div class="service-body">
                                                    <div class="icon-box">
                                                        <img src={logo3} alt="" />
                                                    </div>
                                                    <div class="service-content">
                                                        <h3><a href="service-single.html">Борьба с вредителями в жилых помещениях</a></h3>
                                                        <p>Индивидуальные решения для защиты вашего дома от распространенных вредителей.</p>
                                                    </div>
                                                    <div class="service-btn">
                                                        <a href="/contact" class="readmore-btn">читать далее</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div class="services-pagination"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                            <p>Готовы ли вы к дому без вредителей? <a href="/contact">Свяжитесь с нами сегодня!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurServices;
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'
import logo from '../assents/img/logo-icon/about-us-image.jpg'
import logo1 from '../assents/img/logo-icon/about-circle-img-1.jpg'
import logo2 from '../assents/img/logo-icon/about-circle-img-2.jpg'
import logo3 from '../assents/img/logo-icon/about-us-video-image.jpg'
function AboutUs() {
    return (
        <div class="about-us">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">

                        <div class="about-us-images">

                            <div class="about-us-image">
                                <figure class="image-anime">
                                    <img src={logo} alt="" />
                                </figure>
                            </div>

                            <div class="about-us-circle-img-1">
                                <figure class="image-anime">
                                    <img src={logo1} alt="" />
                                </figure>
                            </div>

                            <div class="about-us-circle-img-2">
                                <figure class="image-anime">
                                    <img src={logo2} alt="" />
                                </figure>
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-7">
                        <div class="about-us-content">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">о нас</h3>
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Защита дома, <span>бизнеса и сообществ</span></h2>
                                <p class="wow fadeInUp" data-wow-delay="0.2s">Наша миссия проста: предоставлять надежные
                                    услуги по борьбе с вредителями, которые гарантируют чистую, безопасную и комфортную среду для
                                    каждого. Благодаря многолетнему опыту и подходу, ориентированному на клиента, мы делаем все возможное,
                                    чтобы уничтожить вредителей и предотвратить их возвращение.</p>
                            </div>

                            <div class="about-us-body">
                                <div class="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Экспертиза, которой можно доверять</li>
                                        <li>Доступность 24/7</li>
                                        <li>Сертифицированные специалисты</li>
                                        <li>Доступные решения</li>
                                        <li>Экологичный подход</li>
                                        <li>Продвинутые методы</li>
                                        <li>Клиентоориентированный сервис</li>
                                        <li>Стремление к совершенству</li>
                                    </ul>
                                </div>

                                <div class="about-us-video-image wow fadeInUp" data-wow-delay="0.4s">
                                    <figure class="image-anime">
                                        <img src={logo3} alt="" />
                                    </figure>

                                    <div class="video-play-button">
                                    </div>
                                </div>
                            </div>

                            <div class="about-counter-list">
                                <div class="about-counter-item">
                                    <h2><span class="counter">29</span>+</h2>
                                    <p>Многолетний опыт</p>
                                </div>

                                <div class="about-counter-item">
                                    <h2><span class="counter">2</span>K</h2>
                                    <p>Завершенные проекты</p>
                                </div>

                                <div class="about-counter-item">
                                    <h2><span class="counter">50</span></h2>
                                    <p>Специальная команда</p>
                                </div>

                                <div class="about-counter-item">
                                    <h2><span class="counter">98</span>%</h2>
                                    <p>Довольные клиенты</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
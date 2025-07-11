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
import logo from '../assents/img/owl/features-image.jpg'

import logo2 from '../assents/img/owl/1.svg'
import logo3 from '../assents/img/owl/2.svg'
import logo4 from '../assents/img/owl/3.svg'
import logo5 from '../assents/img/owl/4.svg'
function OurFeatures() {
    return (
        <div class="our-features">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="our-features-content">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">Наши особенности</h3>
                                <h2 class="text-anime-style-2" data-cursor="-opaque"><span>Ваш надежный партнер в борьбе с вредителями</span>
                                    <span> контроль совершенства</span></h2>
                                <p class="wow fadeInUp" data-wow-delay="0.2s">В Ташкенте, Самарканде и Гулистане: Дезинфекция, уничтожение насекомых, бактерий и вирусов с гарантией.</p>
                            </div>

                            <div class="our-features-list">
                                <div class="features-item wow fadeInUp">
                                    <div class="icon-box">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <div class="features-item-content">
                                        <h3>Экстренные службы</h3>
                                        <p>Мы доступны круглосуточно для решения.</p>
                                    </div>
                                </div>

                                <div class="features-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="icon-box">
                                        <img src={logo3} alt="" />
                                    </div>
                                    <div class="features-item-content">
                                        <h3>Индивидуальное лечение</h3>
                                        <p>Каждый объект недвижимости уникален, поэтому мы предлагаем персонализированную программу по борьбе с вредителями.</p>
                                    </div>
                                </div>

                                <div class="features-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="icon-box">
                                        <img src={logo3} alt="" />
                                    </div>
                                    <div class="features-item-content">
                                        <h3>Сертифицированные специалисты</h3>
                                        <p>Наша команда полностью обучена, сертифицирована и имеет большой опыт.</p>
                                    </div>
                                </div>

                                <div class="features-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div class="icon-box">
                                        <img src={logo4} alt="" />
                                    </div>
                                    <div class="features-item-content">
                                        <h3>Гарантированный результат</h3>
                                        <p>Мы даем гарантию удовлетворения наших услуг.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">

                        <div class="features-image">
                            <img src={logo} alt="" />

                            <div class="contact-us-circle">
                                <a href="contact.html">
                                    <img src="images/contact-us-circle.svg" alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurFeatures;
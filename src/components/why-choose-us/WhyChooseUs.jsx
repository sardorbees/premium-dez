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
import logo2 from '../assents/img/owl/1.svg'
import logo3 from '../assents/img/owl/2.svg'
import logo4 from '../assents/img/owl/3.svg'
import logo5 from '../assents/img/owl/4.svg'
import logo6 from '../assents/img/owl/4.svg'

import call from '../assents/img/icon/call.png'
function WhyChooseUs() {
    return (
        <div class="why-choose-us light-bg-section">
            <div class="container">
                <div class="row section-row">
                    <div class="col-lg-12">

                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">почему выбирают нас</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Что делает нас лучшими <span>выбор для
                                вас</span></h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">Мы понимаем, насколько неприятными и разрушительными могут быть вредители, поэтому мы стремимся предоставлять быстрые, надежные и эффективные решения.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">

                        <div class="why-choose-box">

                            <div class="why-choose-item wow fadeInUp">
                                <div class="icon-box">
                                    <img src={logo2} alt="" />
                                </div>
                                <div class="why-choose-item-content">
                                    <h3>Экстренные службы</h3>
                                    <p>Мы доступны для обращения круглосуточно.</p>
                                </div>
                            </div>

                            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon-box">
                                    <img src={logo3} alt="" />
                                </div>
                                <div class="why-choose-item-content">
                                    <h3>Индивидуальные процедуры</h3>
                                    <p>Мы доступны для обращения круглосуточно.</p>
                                </div>
                            </div>

                            <div class="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon-box">
                                    <img src={logo4} alt="" />
                                </div>
                                <div class="why-choose-item-content">
                                    <h3>Сертифицированные специалисты</h3>
                                    <p>Мы доступны для обращения круглосуточно.</p>
                                </div>
                            </div>

                            <div class="page-cta-box wow fadeInUp" data-wow-delay="0.6s">

                                <div class="page-cta-box-info">
                                    <h3>Освободите свой дом от вредителей. Сегодня!</h3>
                                </div>

                                <div class="cta-contact-box">
                                    <p>позвоните сейчас</p>
                                    <div class="cta-contact-item">
                                        <div class="icon-box">
                                            <img src={call} alt="" />
                                        </div>
                                        <div class="cta-contact-item-content">
                                            <h3><a href="tel:+998957666646">+998 95 766 66 46</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
                            <p><span>Бесплатно</span>Давайте создадим среду, свободную от вредителей - <a href="/contact">Свяжитесь с нами сегодня!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs;
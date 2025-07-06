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
import hero from '../assents/img/banner/hero-image.png'
function Main() {
    return (
        <div>
            <div class="hero dark-section parallaxie">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="hero-content">
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">Your Shield Against Unwanted Guests</h3>
                                    <h1 class="text-anime-style-2" data-cursor="-opaque">Дезинфекция квартир, домов, офисов в Ташкенте</h1>
                                    <p class="wow fadeInUp" data-wow-delay="0.2s">Выезд за 30 минут · От 49 000 сум · Гарантия результата</p>
                                </div>

                                <div class="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="/contact" class="btn-default btn-highlighted">заказать услугу</a>
                                    <a href="/services" class="hero-service-btn">Просмотреть все услуги</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="hero-image">
                                <figure>
                                    <img src={hero} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
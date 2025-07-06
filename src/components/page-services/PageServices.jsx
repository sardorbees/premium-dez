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
import logo from '../assents/img/logo-icon/1.svg'
import logo1 from '../assents/img/logo-icon/2.svg'
import logo2 from '../assents/img/logo-icon/3.svg'
import logo3 from '../assents/img/logo-icon/4.svg'

import img from '../assents/img/xasha/mol.webp'
import img1 from '../assents/img/xasha/nas.webp'
import img2 from '../assents/img/xasha/sss.webp'
import img3 from '../assents/img/xasha/tarakan.jpg'
function PageServices() {

    return (
        <div class="page-services">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">

                        <div class="service-item wow fadeInUp" data-wow-delay="1.4s">

                            <div class="service-image">
                                <a data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src={img3} alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div class="service-body">
                                <div class="icon-box">
                                    <img src={logo} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3><a >Что такое тараканы?</a></h3>
                                    <p>Тараканы варьируются по размерам, цвету и внешнему виду в зависимости от их вида. В основном у них плоские, овальные тела, длинные усики и шесть лап. Их окраска может быть от красновато-коричневого до тёмно-коричневого или даже чёрного цвета. Длина этих насекомых составляет от полдюйма до трёх дюймов. У большинства тараканов есть крылья, но далеко не все из них способны к полёту, что также зависит от вида.</p>
                                </div>
                                <div class="service-btn">
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">

                        <div class="service-item wow fadeInUp" data-wow-delay="1.4s">

                            <div class="service-image">
                                <a  data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src={img1} alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div class="service-body">
                                <div class="icon-box">
                                    <img src={logo1} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3><a>Насекомые</a></h3>
                                    <p>Компания предлагает профессиональные решения по уничтожению насекомых, помогая вам избавиться от вредителей быстро, эффективно и безопасно.</p>
                                </div>
                                <div class="service-btn">
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">

                        <div class="service-item wow fadeInUp" data-wow-delay="1.4s">

                            <div class="service-image">
                                <a data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src={img} alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div class="service-body">
                                <div class="icon-box">
                                    <img src={logo2} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3><a >Борьба с молью</a></h3>
                                    <p>Когда моль ищет укрытие или пищу, она может обосноваться в вашем доме. Свет из окон привлекает этих вредителей, а после проникновения избавиться от них может быть непросто.</p>
                                </div>
                                <div class="service-btn">
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">

                        <div class="service-item wow fadeInUp" data-wow-delay="1.4s">

                            <div class="service-image">
                                <a data-cursor-text="View">
                                    <figure class="image-anime">
                                        <img src={img2} alt="" />
                                    </figure>
                                </a>
                            </div>

                            <div class="service-body">
                                <div class="icon-box">
                                    <img src={logo3} alt="" />
                                </div>
                                <div class="service-content">
                                    <h3><a>Что нужно знать о мокрицах?</a></h3>
                                    <p>Если вы заметили мокриц в своём доме, не пытайтесь бороться с ними самостоятельно – домашние средства дают лишь временный эффект, но не уничтожают причину заражения.</p>
                                </div>
                                <div class="service-btn">
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageServices;
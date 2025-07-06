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
function BestServices() {
    return (
        <div class="best-services">
            <div class="container-fluid">
                <div class="row no-gutters">
                    <div class="col-lg-12">
                        <div class="best-services-box">
                            <div class="best-service-item wow fadeInUp">
                                <div class="icon-box">
                                    <img src={logo} alt="" />
                                </div>
                                <div class="best-service-item-content">
                                    <h3>Всестороннее покрытие</h3>
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>

                            <div class="best-service-item wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon-box">
                                    <img src={logo1} alt="" />
                                </div>
                                <div class="best-service-item-content">
                                    <h3>Быстрое время отклика</h3>
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>

                            <div class="best-service-item wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon-box">
                                    <img src={logo2} alt="" />
                                </div>
                                <div class="best-service-item-content">
                                    <h3>Коммерческие услуги</h3>
                                    <a href="/contact" class="readmore-btn">читать далее</a>
                                </div>
                            </div>

                            <div class="best-service-item wow fadeInUp" data-wow-delay="0.6s">
                                <div class="icon-box">
                                    <img src={logo3} alt="" />
                                </div>
                                <div class="best-service-item-content">
                                    <h3>Круглосуточная экстренная помощь</h3>
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
export default BestServices;
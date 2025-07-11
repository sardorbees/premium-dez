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
import TariffCardList from '../tariffcardlist/TariffCardList';
function OurPricing() {
    return (
        <div class="our-pricing">
            <div class="container">
                <div class="row section-row">
                    <div class="col-lg-12">

                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">наш тарифный план</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque"><span>Качественные услуги по борьбе с вредителями в</span>
                                <span> конкурентоспособные цены</span></h2>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <TariffCardList />
                    <div class="col-lg-12">
                        <div class="pricing-benefit-list wow fadeInUp" data-wow-delay="0.4s">
                            <ul>
                                <li><img src="images/icon-pricing-benefit-1.svg" alt="" />Получите 30-дневную бесплатную пробную версию</li>
                                <li><img src="images/icon-pricisng-benefit-2.svg" alt="" />Никаких скрытых платежей не платите.</li>
                                <li><img src="images/icon-pricing-benefit-3.svg" alt="" />Вы можете отменить в любое время.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurPricing;
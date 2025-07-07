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
import ContactForm from '../contact-form/ContactForm';
import Location from '../location/Location';
function ContactUs() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Связаться с нами</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact-info-box">
                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="icon-box">
                                        <img src="images/icon-phone.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>Связаться с нами</h3>
                                        <p><a href="tel:+998957666646">+998 95 766 66 46</a></p>
                                        <p><a href="tel:+998957666635">+998 95 766 66 35</a></p>
                                    </div>
                                </div>

                                {/* <div class="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="icon-box">
                                        <img src="images/icon-location.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>расположение</h3>
                                        <p>123 Greenway Avenue, Springfield, USA</p>
                                    </div>
                                </div> */}

                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div class="icon-box">
                                        <img src="images/icon-clock.svg" alt="" />
                                    </div>
                                    <div class="contact-info-content">
                                        <h3>Рабочие часы</h3>
                                        <p>Пн - Сб :- 7:00 - 5:00</p>
                                        <p>Воскресенье:- Закрыто</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
            <Location />
        </div>
    )
}
export default ContactUs;
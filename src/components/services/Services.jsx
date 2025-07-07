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
import PageServices from '../page-services/PageServices';
import WhyChooseUs from '../why-choose-us/WhyChooseUs'
import OurTestimonials from '../our-testimonials/OurTestimonials';
function Services() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Наши услуги</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageServices />
            <WhyChooseUs />
            <OurTestimonials />
        </div>

    )
}
export default Services;
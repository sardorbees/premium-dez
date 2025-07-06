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
import HeroDark from '../hero-dark/HeroDark'
import BestServices from '../best-services/BestServices';
import AboutUs from '../about-us/AboutUs';
import OurServices from '../our-services/OurServices';
import OurFeatures from '../our-features/OurFeatures';
import OurPricing from '../our-pricing/OurPricing'
import OurProject from '../our-project/OurProject'
import OurTestimonials from '../our-testimonials/OurTestimonials'
import WhyChooseUs from '../why-choose-us/WhyChooseUs'
function Main() {
    return (
        <div>
            <HeroDark />
            <BestServices />
            <AboutUs />
            <OurServices />
            <OurFeatures />
            <OurPricing />
            <OurProject />
            <OurTestimonials />
            <WhyChooseUs />
        </div>
    )
}
export default Main;
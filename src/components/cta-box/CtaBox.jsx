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
function CtaBox() {
    return (
        <div class="cta-box dark-section parallaxie">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-6 order-md-1 order-2">

                        <div class="cta-box-image">
                            <img src="images/cta-box-image.png" alt=""/>
                        </div>

                    </div>

                    <div class="col-lg-5 col-md-6 order-md-2 corder-1">

                        <div class="cta-box-content">

                            <div class="section-title">
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Let's talk about your <span>pest
                                    control needs</span></h2>
                            </div>

                            <div class="cta-box-body wow fadeInUp">
                                <ul>
                                    <li>Schedule Your Free Inspection</li>
                                    <li>Prevent Future Infestations</li>
                                    <li>Simple and Fast Booking</li>
                                </ul>
                            </div>

                            <div class="cta-btn wow fadeInUp" data-wow-delay="0.2s">
                                <a href="contact.html" class="btn-default btn-highlighted">Get Membership</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CtaBox;
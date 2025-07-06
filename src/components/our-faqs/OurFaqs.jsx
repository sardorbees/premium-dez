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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
function OurFaqs() {
    const [open, setOpen] = useState(false);
    return (
        <div class="our-faqs dark-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">

                        <div class="our-faqs-images">
                            <div class="faqs-img-1">
                                <figure class="image-anime reveal">
                                    <img src="images/faqs-img-1.jpg" alt="" />
                                </figure>
                            </div>

                            <div class="faqs-img-2">
                                <figure class="image-anime reveal">
                                    <img src="images/faqs-img-2.jpg" alt="" />
                                </figure>
                            </div>

                            <div class="faqs-img-3">
                                <figure class="image-anime reveal">
                                    <img src="images/faqs-img-3.jpg" alt="" />
                                </figure>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurFaqs;
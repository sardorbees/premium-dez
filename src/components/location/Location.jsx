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
function Location() {
    return (
        <div class="google-map">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="google-map-iframe">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.582248923274!2d69.37594936977536!3d41.3546237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef71699607e43%3A0xb1d2c1b6a6c06c93!2z0KLQotCXINCx0LDQt9Cw0YA!5e0!3m2!1sru!2s!4v1751865315739!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;
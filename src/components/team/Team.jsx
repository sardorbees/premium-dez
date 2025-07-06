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
function Team() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">Our team</h1>
                                <nav class="wow fadeInUp">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="./">home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">our team</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item wow fadeInUp">
                                <div class="team-image">
                                    <a href="team-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-1.jpg" alt="" />
                                        </figure>
                                    </a>

                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-dribbble"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="team-content">
                                    <h3><a href="team-single.html">Arjun Khanna</a></h3>
                                    <p>Technical Engineer</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="team-item wow fadeInUp">
                                <div class="team-image">
                                    <a href="team-single.html" data-cursor-text="View">
                                        <figure class="image-anime">
                                            <img src="images/team-1.jpg" alt="" />
                                        </figure>
                                    </a>

                                    <div class="team-social-icon">
                                        <ul>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-dribbble"></i></a></li>
                                            <li><a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="team-content">
                                    <h3><a href="team-single.html">Arjun Khanna</a></h3>
                                    <p>Technical Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;
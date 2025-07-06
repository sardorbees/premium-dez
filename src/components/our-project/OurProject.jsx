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
import ProjectBox from '../project-box/ProjectBox';
function OurProject() {
    return (
        <div class="our-project light-bg-section">
            <div class="container">
                <div class="row section-row align-items-center">
                    <div class="col-lg-12">
                        <div class="section-title section-title-center">
                            <h3 class="wow fadeInUp">Наше Работы</h3>
                            <h2 class="text-anime-style-2" data-cursor="-opaque">Изучите наш проверенный послужной список
                                <span> Решения, свободные от вредителей</span></h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <ProjectBox />
                    <div class="col-lg-12">
                        <div class="our-project-btn wow fadeInUp" data-wow-delay="0.2s">
                            <a href="/projects" class="btn-default">Просмотреть все проекты</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurProject;
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
import AboutUs from '../about-us/AboutUs';
import WhyChooseUs from '../why-choose-us/WhyChooseUs'
import OurTestimonials from '../our-testimonials/OurTestimonials';

import logo2 from '../assents/img/owl/1.svg'
import logo3 from '../assents/img/owl/2.svg'
import logo4 from '../assents/img/owl/3.svg'
import logo5 from '../assents/img/owl/4.svg'
import comit from '../assents/img/banner/commitment-image.png'
import start from '../assents/img/banner/staart.png'
import ProgressBar from 'react-bootstrap/ProgressBar';


import start1 from '../assents/img/banner/approach-img-1.jpg'
import start2 from '../assents/img/banner/approach-img-2.jpg'
import start3 from '../assents/img/banner/vision-image.jpg'
import start4 from '../assents/img/banner/mission-image.jpg'
import pass from '../assents/img/banner/passion-img-1.jpg'
import pass1 from '../assents/img/banner/passion-img-2.jpg'
function About() {
    return (
        <div>
            <div class="page-header parallaxie">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="page-header-box">
                                <h1 class="text-anime-style-2" data-cursor="-opaque">О нас</h1>
                                <nav class="wow fadeInUp">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page">О нас</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <div class="our-approach light-bg-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="approach-images">

                                <div class="approach-img-1">
                                    <figure class="image-anime">
                                        <img src={start4} alt="" />
                                    </figure>
                                </div>

                                <div class="approach-image-counter">
                                    <div class="approach-img-2">
                                        <figure class="image-anime">
                                            <img src={start3} alt="" />
                                        </figure>
                                    </div>

                                    <div class="experience-box">
                                        <div class="icon-box">
                                            <img src="images/icon-experience.svg" alt="" />
                                        </div>
                                        <div class="experience-content">
                                            <h2><span class="counter">29</span>+</h2>
                                            <p>Многолетний опыт</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="approach-content">

                                <div class="section-title">
                                    <h3 class="wow fadeInUp">Наш подход</h3>
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">Крафт, <span>формирование будущего</span></h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.2s">В основе всего, что мы делаем, лежит приверженность инновациям и совершенству. Мы верим в создание индивидуальных решений, которые решают уникальные проблемы, одновременно способствуя росту и устойчивости для более светлого будущего.</p>
                                </div>

                                <div class="vision-mission-boxes">

                                    <div class="vision-mission-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div class="vision-mission-content">
                                            <h3>Наше видение</h3>
                                            <p>Наше видение — стать лидером в своей отрасли, устанавливая новые стандарты.</p>
                                        </div>
                                        <div class="vision-mission-image">
                                            <figure class="image-anime">
                                                <img src={start1} alt="" />
                                            </figure>
                                        </div>
                                    </div>

                                    <div class="vision-mission-item wow fadeInUp" data-wow-delay="0.4s">
                                        <div class="vision-mission-content">
                                            <h3>Наше видение</h3>
                                            <p>Наше видение — стать лидером в своей отрасли, устанавливая новые стандарты.</p>
                                        </div>
                                        <div class="vision-mission-image">
                                            <figure class="image-anime">
                                                <img src={start2} alt="" />
                                            </figure>
                                        </div>
                                    </div>

                                </div>

                                <div class="approach-list wow fadeInUp" data-wow-delay="0.6s">
                                    <ul>
                                        <li>Экспертиза, которой можно доверять, подкрепленная многолетним опытом.</li>
                                        <li>Экспертиза, которой можно доверять, основанная на многолетнем опыте.</li>
                                        <li>Наша квалифицированная команда предлагает последовательные и надежные решения.</li>
                                    </ul>
                                </div>
                                <div class="approach-button wow fadeInUp" data-wow-delay="0.8s">
                                    <a href="/contact" class="btn-default">Узнайте больше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-passion">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="passion-image-content">
                                <div class="section-title">
                                    <h3 class="wow fadeInUp">Что нами движет</h3>
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">Страсть к инновациям и <span>качественный сервис</span></h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.2s">Мы стремимся предоставлять инновационные, надежные и высококачественные решения по борьбе с вредителями, которые гарантируют долгосрочные результаты.</p>
                                </div>

                                <div class="passion-image">
                                    <figure class="image-anime">
                                        <img src={pass} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="passion-image-list">
                                <div class="passion-image">
                                    <figure class="image-anime">
                                        <img src={pass1} alt="" />
                                    </figure>
                                </div>

                                <div class="passion-list wow fadeInUp" data-wow-delay="0.2s">
                                    <ul>
                                        <li>Экспертиза, которой можно доверять, подкрепленная многолетним опытом.</li>
                                        <li>Экспертиза, которой можно доверять, основанная на многолетнем опыте.</li>
                                        <li>Наша квалифицированная команда предлагает последовательные и надежные решения.</li>
                                        <li>Нам доверяют тысячи людей, и мы гордимся тем, что предлагаем.</li>
                                    </ul>
                                </div>
                                <div class="passion-button wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="/contact" class="btn-default">связаться с нами</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <div class="our-legacy">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">

                            <div class="legacy-content">

                                <div class="section-title section-title-center">
                                    <h3 class="wow fadeInUp">Наше наследие</h3>
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">Формирование совершенства в <span>борьба с вредителями</span></h2>
                                    <p>Сохраняем наше наследие с помощью инновационных и надежных решений по борьбе с вредителями, гарантируя безопасность и удовлетворение в каждом защищаемом нами пространстве.</p>
                                </div>

                                <div class="legacy-button">
                                    <a href="/contact" class="btn-default">узнать больше</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">

                            <div class="legacy-item-list">

                                <div class="legacy-item wow fadeInUp">
                                    <div class="icon-box">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <div class="legacy-item-content">
                                        <h3>Expert techniques</h3>
                                        <p>Using advanced tools and proven methods to ensure long-lasting pest control solutions.</p>
                                    </div>
                                </div>

                                <div class="legacy-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div class="icon-box">
                                        <img src={logo3} alt="" />
                                    </div>
                                    <div class="legacy-item-content">
                                        <h3>Экологичный подход</h3>
                                        <p>Мы стремимся защищать ваш дом и окружающую среду с помощью инновационных экологичных решений.</p>
                                    </div>
                                </div>

                                <div class="legacy-item wow fadeInUp" data-wow-delay="0.4s">
                                    <div class="icon-box">
                                        <img src={logo4} alt="" />
                                    </div>
                                    <div class="legacy-item-content">
                                        <h3>Обученные специалисты</h3>
                                        <p>Наша сертифицированная команда предоставляет профессиональные услуги по борьбе с вредителями, адаптированные к вашим конкретным потребностям.</p>
                                    </div>
                                </div>

                                <div class="legacy-item wow fadeInUp" data-wow-delay="0.6s">
                                    <div class="icon-box">
                                        <img src={logo5} alt="" />
                                    </div>
                                    <div class="legacy-item-content">
                                        <h3>Своевременное обслуживание</h3>
                                        <p>Предоставление эффективных и надежных услуг по борьбе с вредителями именно тогда, когда они вам больше всего нужны.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-commitment dark-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="commitment-content">
                                <div class="section-title section-title-center">
                                    <h3 class="wow fadeInUp">наше обязательство</h3>
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">Нацелены на долгосрочную перспективу <span>решения по борьбе с вредителями</span></h2>
                                    <p class="wow fadeInUp" data-wow-delay="0.2s">Мы предлагаем устойчивые решения по борьбе с вредителями, которые решают текущие проблемы и предотвращают будущие заражения.</p>
                                </div>

                                <div class="commitment-list">

                                    <div class="skills-progress-bar">

                                        <div class="skillbar" data-percent="100%">
                                            <div class="skill-data">
                                                <div class="skill-title">Эффективность борьбы с вредителями</div>
                                            </div>
                                            <div class="skill-progress">
                                                <ProgressBar now={100} />
                                                <div class="count-bar"></div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="skills-progress-bar">

                                        <div class="skillbar" data-percent="65%">
                                            <div class="skill-data">
                                                <div class="skill-title">Долгосрочная профилактика</div>
                                            </div>
                                            <div class="skill-progress">
                                                <ProgressBar now={60} />;
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="commitment-images">

                                <div class="commitment-img">
                                    <figure>
                                        <img src={comit} alt="" />
                                    </figure>
                                </div>

                                <div class="contact-us-circle">
                                    <a href="contact.html">
                                        <img src="images/contact-us-circle.svg" alt="" />
                                    </a>
                                </div>

                                <div class="experience-counter-box">
                                    <h2><span class="counter">25</span>+</h2>
                                    <p>Многолетний опыт</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <OurTestimonials />
        </div>
    )
}
export default About;
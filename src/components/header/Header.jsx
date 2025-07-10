import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
import Offcanvas from 'react-bootstrap/Offcanvas';
import burger from '../assents/img/burgr.png'
import call from '../assents/img/icon/call.png'

import telegram from '../assents/img/icon/telegram.png'
import instagram from '../assents/img/icon/instagram.png'
import ThemeToggle from '../themetoggle/ThemeToggle';
import Logout from '../pages/Logout'
import Navbar from '../navbar/Navbar'
function Header() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('access')
        if (token) {
            axios.get('/api/accounts/profile/', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => {
                setUser(res.data)
            }).catch(() => setUser(null))
        }
    }, [])
    const [photo, setPhoto] = useState(null);
    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const res = await axios.get(`https://backend-dedd.onrender.com/api/logo/categories/${1}/`);
                setPhoto(res.data);
            } catch (error) {
                console.error('Ошибка загрузки фото:', error);
            }
        };
        fetchPhoto();
        const intervalId = setInterval(fetchPhoto, 1000);
        return () => clearInterval(intervalId);
    }, [photo]);

    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        axios.get('https://backend-dedd.onrender.com/api/category/categories/')
            .then(response => setCategories(response.data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchCategories();
        const interval = setInterval(fetchCategories, 1000); // автообновление каждую секунду
        return () => clearInterval(interval);
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div class="topbar">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9">
                            <div class="topbar-contact-info">
                                <ul>
                                    <li><a href="tel:+998957666635"><img src={call} alt="" width={20} style={{ marginRight: '5px' }} />+998 95 766 66 35</a></li>
                                    <li><a href="tel:+998957666646"><img src={call} alt="" width={20} style={{ marginRight: '5px' }} />+998 95 766 66 46</a></li>
                                    <ThemeToggle />
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="topbar-social-links">
                                <ul>
                                    <li><a href="https://t.me/Premium_dizenfeksiya"><img src={telegram} alt="" width={30} /></a></li>
                                    <li><a href="https://www.instagram.com/premium_dezinfeksiya_xizmati?igsh=ejhzZXRscGl4bG1h"><img src={instagram} alt="" width={30} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header class="main-header">
                <div class="header-sticky">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">

                            <a class="navbar-brand" href="./">
                                {photo?.image && (
                                    <img src={photo.image} alt="Logo" style={{ width: '190px' }} />
                                )}
                            </a>

                            <div class="collapse navbar-collapse main-menu">
                                <div class="nav-menu-wrapper">
                                    <ul class="navbar-nav mr-auto" id="menu">
                                        <li class="nav-item"><a class="nav-link" href="./">Основный</a></li>
                                        {categories.map(cat => (
                                            <li className="nav-item" key={cat.id}>
                                                <a className="nav-link" href={cat.slug}>{cat.category_name}</a>
                                            </li>
                                        ))}
                                        <li class="nav-item submenu"><a class="nav-link" href="#">Страницы</a>
                                            <ul>
                                                <li class="nav-item"><a class="nav-link" href="/projects">Проекты</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/comments">Написать отзыв</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/our-pricing">Тарифный план</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/testimonials">Отзывы</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/image-gallery">Галерея изображений</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/video-gallery">Видеогалерея</a></li>
                                            </ul>
                                        </li>
                                        <Navbar />
                                    </ul>
                                </div>

                                <div class="header-btn">
                                    <a href="/contact" class="btn-default">Оформить заявку</a>
                                </div>
                            </div>
                            <div class="navbar-toggle">
                                <>
                                    <div className="sodi">
                                        <Navbar className='ifgb' />
                                        <Button variant="green" onClick={handleShow}>
                                            <img src={burger} alt="" width={25} className='slicknav_btn' style={{ border: 'none', outline: 'none' }} />
                                        </Button>
                                    </div>
                                    <Offcanvas show={show} onHide={handleClose}>
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>
                                                {photo?.image && (
                                                    <img src={photo.image} alt="Logo" style={{ width: '240px' }} />
                                                )}
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div class="nav-menu-wrapper">
                                                <ul class="navbar-nav mr-auto" id="menu">
                                                    <li class="nav-item"><a class="nav-link" href="./">Основный</a></li>
                                                    {categories.map(cat => (
                                                        <li className="nav-item" key={cat.id}>
                                                            <a className="nav-link" href={cat.slug}>{cat.category_name}</a>
                                                        </li>
                                                    ))}
                                                    <li class="nav-item submenu"><a class="nav-link" href="#">Страницы</a>
                                                        <ul>
                                                            <li class="nav-item"><a class="nav-link" href="/projects">Проекты</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/comments">Написать отзыв</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/team">Команда</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/our-pricing">Тарифный план</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/testimonials">Отзывы</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/image-gallery">Галерея изображений</a></li>
                                                            <li class="nav-item"><a class="nav-link" href="/video-gallery">Видеогалерея</a></li>
                                                        </ul>
                                                    </li>
                                                    <br /><br /><br />
                                                    <h3>связаться с нами</h3>
                                                    <div className="fdiuf">
                                                        <div class="icon-box">
                                                            <img src={call} alt="" width={20} />
                                                        </div>
                                                        <div class="footer-contact-content">
                                                            <p><a href="tel:++998957666646" style={{ color: 'black' }}>+998 95 766 66 46</a></p>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                            <div className='icon-df'>
                                                <li style={{ textDecoration: 'none', listStyleType: 'none' }}><a href="https://t.me/Premium_dizenfeksiya"><img src={telegram} alt="" width={30} /></a></li>
                                                <li style={{ textDecoration: 'none', listStyleType: 'none' }}><a href="https://www.instagram.com/premium_dezinfeksiya_xizmati?igsh=ejhzZXRscGl4bG1h"><img src={instagram} alt="" width={30} /></a></li>
                                            </div>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </>
                            </div>
                        </div>
                    </nav>
                    <div class="responsive-menu"></div>
                </div>
            </header>
        </div>

    )
}

export default Header;
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import telegram from '../assents/img/icon/telegram.png'
import instagram from '../assents/img/icon/instagram.png'
import call from '../assents/img/icon/call.png'
function Footer() {
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
    return (
        <div>
            <footer class="main-footer dark-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="about-footer footer-links">
                                <a class="navbar-brand" href="./">
                                    {photo?.image && (
                                        <img src={photo.image} alt="Logo" style={{ width: '190px' }} />
                                    )}
                                </a>
                                <br /><br /><br />
                                <h3>Дезинфекция квартир, домов, офисов в Ташкенте</h3>
                                <p>Выезд за 30 минут · От 49 000 сум · Гарантия результата</p>
                            </div>

                        </div>

                        <div class="col-lg-2 col-md-3">

                            <div class="footer-links">
                                <h3>услуги</h3>
                                <ul>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/" >Основный</a></li>
                                    {categories.map(cat => (
                                        <li className="nav-item" key={cat.id} style={{textDecoration: 'none', listStyleType: 'none'}}>
                                            <a className="nav-link" href={cat.slug}>{cat.category_name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-2 col-md-4">

                            <div class="footer-links">
                                <h3>Страницы</h3>
                                <ul>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/projects">Проекты</a></li>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/our-pricing">Тарифный план</a></li>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/testimonials">Отзывы</a></li>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/image-gallery">Галерея изображений</a></li>
                                    <li style={{textDecoration: 'none', listStyleType: 'none'}}><a href="/video-gallery">Видеогалерея</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-3 col-md-5">
                            <div class="footer-links">
                                <h3>связаться с нами</h3>

                                <div class="footer-contact-item">
                                    <div class="icon-box">
                                        <img src={call} alt="" width={20} />
                                    </div>
                                    <div class="footer-contact-content">
                                        <p><a href="tel:++998957666646">+998 95 766 66 46</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="footer-copyright">
                                <div class="footer-logo">
                                    <img src="images/footer-logo.svg" alt="" />
                                </div>

                                <div class="footer-social-links">
                                    <ul>
                                        <li><a href="https://t.me/Premium_dizenfeksiya"><img src={telegram} alt="" width={30} /></a></li>
                                        <li><a href="https://www.instagram.com/premium_dezinfeksiya_xizmati?igsh=ejhzZXRscGl4bG1h"><img src={instagram} alt="" width={30} /></a></li>
                                    </ul>
                                </div>

                                <div class="footer-copyright-text">
                                    <a href="https://t.me/basitdesigns" style={{ color: 'white' }}>Веб-сайт создан Krafto-Agency</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
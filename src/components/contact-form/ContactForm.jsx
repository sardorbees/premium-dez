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
import contacs from '../assents/img/banner/contact-us-img.jpg'
function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        address: '',
        description: '',
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://backend-dedd.onrender.com/api/applicationapplications/', formData);
            setSuccess(true);
            setFormData({ full_name: '', phone: '', address: '', description: '' });
        } catch (error) {
            console.error('Ошибка при отправке формы', error);
        }
    };
    return (
        <div class="contact-form-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="contact-us-box">

                            <div class="contact-us-form">

                                <div class="section-title">
                                    <h2 class="text-anime-style-2" data-cursor="-opaque">Эффективные решения по борьбе с вредителями - <span> свяжитесь с нами сегодня!</span></h2>
                                </div>

                                <h2 className="text-xl font-semibold mb-4">Заявка на дезинфекцию</h2>
                                {success && <p className="text-green-600 mb-4">Заявка отправлена! Мы свяжемся через 15 минут</p>}
                                <form onSubmit={handleSubmit} class="contact-form wow fadeInUp">
                                    <div class="row">
                                        <div class="form-group col-md-6 mb-4">
                                            <input
                                                name="full_name"
                                                type="text"
                                                placeholder="ФИО"
                                                value={formData.full_name}
                                                onChange={handleChange}
                                                style={{ fontSize: '16px', outline: 'none', width: '100%' }}
                                                class="            w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200"
                                                required
                                            />
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-6 mb-4">
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="Телефон"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                style={{ fontSize: '16px', outline: 'none', width: '100%' }}
                                                class="            w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200"
                                                required
                                            />
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-6 mb-4">
                                            <input
                                                name="address"
                                                type="text"
                                                placeholder="Адрес"
                                                value={formData.address}
                                                onChange={handleChange}
                                                style={{ fontSize: '16px', outline: 'none', width: '100%' }}
                                                class="            w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200"
                                                required
                                            />
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="form-group col-md-6 mb-4">
                                            <textarea
                                                name="description"
                                                placeholder="Вашы вопросы"
                                                value={formData.description}
                                                onChange={handleChange}
                                                style={{ fontSize: '16px', outline: 'none', width: '100%', height: '35px' }}
                                                class="            w-full px-4 py-2 rounded border
            bg-white text-black border-gray-300
            placeholder-gray-500

            dark:bg-gray-700 dark:text-white dark:border-gray-600
            dark:placeholder-gray-400

            transition-colors duration-200"
                                            />
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="col-md-12">
                                            <button type="submit" class="btn-default" style={{ background: 'green' }}>
                                                Отправить
                                            </button>
                                            <div id="msgSubmit" class="h3 hidden"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="contact-us-image">
                                <figure class="image-anime">
                                    <img src={contacs} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm;
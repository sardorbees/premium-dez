import React, { useState } from 'react';
import axios from 'axios';
import '../assents/css/order.css'; // Убедись, что путь правильный

export default function OrderForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        address: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://backend-dedd.onrender.com/api/order/api/orders/', form)
            .then(() => {
                setForm({ name: '', phone: '', address: '' });
                setSubmitted(true);
            })
            .catch((err) => {
                console.error('Ошибка при создании заказа:', err);
            });
    };

    return (
        <div className="orders-container">
            <h2>Создать заказ на дезинсекцию</h2>
            <a href="/profile"><h2 style={{ color: 'green', paddingTop: '15px' }}>Перейти на профиль</h2></a>
            <br />
            <form className="order-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid black', outline: 'none' }}
                    className="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid black', outline: 'none' }}
                    className="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Адрес"
                    value={form.address}
                    onChange={handleChange}
                    required
                    style={{ border: '1px solid black', outline: 'none' }}
                    className="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200"
                />
                <button type="submit" className="btn-default">Отправить заказ</button>
            </form>

            {submitted && (
                <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
                    После того, как вы оформите заказ, мы свяжемся с вами в течение 10 минут.
                    <br />
                    <a href="/allorderslist"><h2 style={{ color: 'green', paddingTop: '15px' }}>Потом можете посмотреть все заказы</h2></a>
                </p>
            )}
        </div>
    );
}
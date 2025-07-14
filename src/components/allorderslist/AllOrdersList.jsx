// components/AllOrdersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assents/css/order.css';

const statusLabels = {
    accepted: 'Ваш заказ принят',
    pending: 'Ваш заказ в ожидании',
    cancelled: 'Ваш заказ отменён',
};

const statusColors = {
    accepted: 'green',
    pending: 'yellow',
    cancelled: 'red',
};

export default function AllOrdersList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();

        const interval = setInterval(fetchOrders, 3000); // Обновление каждые 3 секунды
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = () => {
        axios.get('https://backend-dedd.onrender.com/api/order/api/orders/')
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.error('Ошибка при получении заказов:', err);
            });
    };

    return (
        <div className="orders-container">
            <h2>Наши общие заказы</h2>
            <a href="/profile"><h2 style={{ color: 'green', paddingTop: '15px' }}>Перейти на профиль</h2></a>
            <br />
            {orders.length === 0 ? (
                <p>Заказов пока нет</p>
            ) : (
                <ul className="orders-list">
                    {orders.map((order) => (
                        <li key={order.id} className="order-item">
                            <div
                                className="status-block"
                                style={{ backgroundColor: statusColors[order.status] }}
                            >
                                {statusLabels[order.status]}
                            </div>
                            <p><strong>Имя:</strong> {order.name}</p>
                            <p><strong>Телефон:</strong> {order.phone}</p>
                            <p><strong>Адрес:</strong> {order.address}</p>
                            <p><strong>Создан:</strong> {new Date(order.created_at).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
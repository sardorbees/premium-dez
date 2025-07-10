import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ServiceList() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/payment/services/')  // 👈 полный путь
            .then((res) => {
                setServices(res.data);
            }).catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Выберите услугу</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id} className="p-2 border mb-2 rounded">
                        <div className="font-semibold">{service.name}</div>
                        <div>{service.description}</div>
                        <div className="text-green-600">{service.price} сум</div>
                        {/* <a href={`/payment${service.id}`} className="text-blue-500">Оплатить</a> */}
                        <a href={`/pay/${service.id}`} key={service.id} class="readmore-btn">читать далее</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

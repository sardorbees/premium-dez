import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'


const TariffCardList = () => {
    const [tariffs, setTariffs] = useState([]);

    const fetchTariffs = async () => {
        try {
            const res = await axios.get('https://backend-dedd.onrender.com/api/tariff/api/tariffs/');
            setTariffs(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTariffs();
        const interval = setInterval(fetchTariffs, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="row">
            <div class="col-lg-4 col-md-6">
                <div class="pricing-item wow fadeInUp">
                    {tariffs.length === 0 ? (
                        <p className="text-center text-gray-400 col-span-full">Нет активных скидок на сегодня.</p>
                    ) : tariffs.map(tariff => (
                        <div key={tariff.id}>
                            <img src={tariff.image} alt={tariff.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <div class="pricing-header">
                                <h3>{tariff.title}</h3>
                            </div>
                            <div class="pricing-body">
                                <ul>
                                    <li>{tariff.description}</li>
                                    <li>
                                        <h1 style={{marginBottom: '5px', color: 'green'}}>{tariff.discount_percent}% скидка</h1> — <s style={{color: 'red'}}>{tariff.price} сум</s> → {tariff.discounted_price} сум
                                    </li>
                                    {tariff.weekday && (
                                        <li>
                                            День недели: {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][parseInt(tariff.weekday)]}
                                        </li>
                                    )}
                                    {tariff.holiday && (
                                        <li className='text_shadows'>Праздник: {tariff.holiday}</li>
                                    )}
                                    {tariff.icon && (
                                        <img src={tariff.icon} alt="icon" className="w-12 h-12 mb-2" style={{ width: '180px' }} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div class="pricing-btn">
                        <a href="/contact" className='btn-default' style={{ color: 'white' }}>Начните сейчас</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TariffCardList;
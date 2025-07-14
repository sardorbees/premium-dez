import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assents/css/custom.css'

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [currentAddress, setCurrentAddress] = useState(null);
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        country: 'Uzbekistan',
        region: '',
        city: '',
        address: '',
        phone: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = () => {
        axios.get('https://backend-dedd.onrender.com/api/adresslc/addresses/')
            .then(res => {
                setAddresses(res.data);
                if (res.data.length > 0) {
                    setCurrentAddress(res.data[0]); // берем первый адрес для редактирования
                    setForm(res.data[0]);
                } else {
                    setCurrentAddress(null);
                    setForm({
                        first_name: '',
                        last_name: '',
                        email: '',
                        country: 'Uzbekistan',
                        region: '',
                        city: '',
                        address: '',
                        phone: ''
                    });
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Ошибка загрузки адресов');
                setLoading(false);
            });
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setError(null);
        if (currentAddress) {
            // Обновляем адрес
            axios.put(`https://backend-dedd.onrender.com/api/adresslc/addresses/${currentAddress.id}/`, form)
                .then(res => {
                    fetchAddresses();
                    setCurrentAddress(res.data);
                    setForm(res.data);
                })
                .catch(() => setError('Ошибка при обновлении адреса'));
        } else {
            // Создаем новый адрес
            axios.post('https://backend-dedd.onrender.com/api/adresslc/addresses/', form)
                .then(res => {
                    fetchAddresses();
                    setCurrentAddress(res.data);
                    setForm(res.data);
                })
                .catch(() => setError('Ошибка при создании адреса'));
        }
    };

    const handleEdit = (address) => {
        setCurrentAddress(address);
        setForm(address);
        setError(null);
    };

    const handleDelete = (id) => {
        axios.delete(`https://backend-dedd.onrender.com/api/adresslc/addresses/${id}/`)
            .then(() => {
                fetchAddresses();
                if (currentAddress?.id === id) {
                    setCurrentAddress(null);
                    setForm({
                        first_name: '',
                        last_name: '',
                        email: '',
                        country: 'Uzbekistan',
                        region: '',
                        city: '',
                        address: '',
                        phone: ''
                    });
                }
            })
            .catch(() => setError('Ошибка при удалении адреса'));
    };

    if (loading) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>{currentAddress ? 'Редактировать адрес' : 'Добавить адрес'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{}}>
                <div className='sss'>
                    <input name="first_name" placeholder="Имя" value={form.first_name} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                    <input name="last_name" placeholder="Фамилия" value={form.last_name} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                    <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 nauyu" />
                </div>
                <div className='sss'>
                    <input name="country" placeholder="Страна" value={form.country} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                    <input name="region" placeholder="Край/Область" value={form.region} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                    <input name="city" placeholder="Город" value={form.city} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 nauyu" />
                </div>
                <div className='sss'>
                    <input name="address" placeholder="Адрес" value={form.address} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                    <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required style={{ border: '1px solid black', }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200 saw" />
                </div>
                <br /><br />
                <button type="submit" class="btn-default">{currentAddress ? 'Обновить' : 'Добавить'}</button>
            </form>
            <br /><br />
            <h3>Список адресов</h3>
            <br />
            {addresses.length === 0 && <p>Адресов нет</p>}
            <ul>
                {addresses.map(addr => (
                    <li key={addr.id} style={{ marginBottom: '8px', listStyleType: 'none' }}>
                        <div class="row">
                            <div class="col-sm-3" style={{ display: 'flex', columnGap: '25px', textAlign: 'center', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                                <h6 class="mb-0">Ваша Имя</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <h6>{addr.first_name}</h6>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-sm-3" style={{ display: 'flex', columnGap: '25px', textAlign: 'center', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                                <h6 class="mb-0">Ваша Фамилия</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <h6>{addr.last_name}</h6>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-sm-3" style={{ display: 'flex', columnGap: '25px', textAlign: 'center', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                                <h6 class="mb-0">Ваша Город</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <h6>{addr.city}</h6>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-sm-3" style={{ display: 'flex', columnGap: '25px', textAlign: 'center', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                                <h6 class="mb-0">Ваша Адрес</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <h6>{addr.address}</h6>
                            </div>
                        </div><br />
                        <div class="row">
                            <div class="col-sm-3" style={{ display: 'flex', columnGap: '25px', textAlign: 'center', margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                                <h6 class="mb-0">Ваша Телефон номер</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <h6>{addr.phone}</h6>
                            </div>
                        </div>
                        <br />
                        <br />
                        <button onClick={() => handleEdit(addr)} style={{ marginLeft: '10px' }} class="btn-default">Редактировать</button>
                        <br /><br /><br />
                        <button onClick={() => handleDelete(addr.id)} style={{ marginLeft: '5px', color: 'red' }} class="btn-default">Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Addresses;

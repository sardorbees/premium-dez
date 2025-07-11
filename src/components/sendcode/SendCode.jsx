// src/components/SendCode.js
import React, { useState } from 'react';
import axios from 'axios';

const SendCode = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/call_phone/send-sms-code/', {
                phone_number: phoneNumber,
            });
            setMessage('Код успешно отправлен!');
            localStorage.setItem('reset_phone', phoneNumber);
            onNext(); // перейти ко второму шагу
        } catch (error) {
            setMessage(error.response?.data?.error || 'Ошибка отправки');
        }
    };

    return (
        <div>
            <h2>Восстановление пароля</h2>
            <input
                type="text"
                placeholder="Введите номер (например: +998901234567)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSend}>Отправить код</button>
            <p>{message}</p>
        </div>
    );
};

export default SendCode;
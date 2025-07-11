// src/components/ResetPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const phone = localStorage.getItem('reset_phone');

    const handleReset = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/reset-password/', {
                phone_number: phone,
                code,
                new_password: newPassword,
            });
            setMessage('Пароль успешно изменен!');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Ошибка сброса пароля');
        }
    };

    return (
        <div>
            <h2>Введите код и новый пароль</h2>
            <input
                type="text"
                placeholder="Код из SMS"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <input
                type="password"
                placeholder="Новый пароль"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleReset}>Сбросить пароль</button>
            <p>{message}</p>
        </div>
    );
};

export default ResetPassword;
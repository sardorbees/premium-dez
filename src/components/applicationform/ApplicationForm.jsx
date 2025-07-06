import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
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
            await axios.post('http://127.0.0.1:8000/api/applicationapplications/', formData);
            setSuccess(true);
            setFormData({ full_name: '', phone: '', address: '', description: '' });
        } catch (error) {
            console.error('Ошибка при отправке формы', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Заявка на дезинфекцию</h2>
            {success && <p className="text-green-600 mb-4">Заявка отправлена!</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <br /><br />
                <input
                    name="full_name"
                    type="text"
                    placeholder="ФИО"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <br /><br />
                <input
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <br /><br />
                <input
                    name="address"
                    type="text"
                    placeholder="Адрес"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <br /><br />
                <textarea
                    name="description"
                    placeholder="Дополнительная информация"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <br /><br /><br />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" style={{ background: 'green' }}>
                    Отправить
                </button>
                <br /><br />
            </form>
        </div>
    );
};

export default ApplicationForm;
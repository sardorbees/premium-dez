import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [message, setMessage] = useState('');

  const recaptchaSiteKey = '6LckrXsrAAAAADzjM3jIs7Sudcwl1WZCirW3ERq1'; // reCAPTCHA v2 site key

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = token => {
    setCaptchaToken(token);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!captchaToken) {
      setMessage('Пожалуйста, подтвердите, что вы не робот.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/captcha/api/contact/', {
        ...formData,
        recaptchaToken: captchaToken,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Ошибка отправки');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">Свяжитесь с нами</h2>

      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Сообщение"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      ></textarea>

      <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={handleCaptcha} />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Отправить
      </button>

      {message && <p className="text-red-500">{message}</p>}
    </form>
  );
};

export default ContactForm;
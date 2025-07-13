import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import logo from '../assents/logo/1.png'
import '../assents/css/all.min.css'
import '../assents/css/animate.css'
import '../assents/css/bootstrap.min.css'
import '../assents/css/custom.css'
import '../assents/css/magnific-popup.css'
import '../assents/css/mousecursor.css'
import '../assents/css/slicknav.min.css'
import '../assents/css/swiper-bundle.min.css'

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [showOld, setShowOld] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => v && formData.append(k, v));

    try {
      await API.post("api/accounts/register/", formData);
      alert("✅ Регистрация прошла успешно");
      window.dispatchEvent(new Event("authChanged")); // 👈 добавь
      navigate("/login");
    } catch (err) {
      alert("Ошибка регистрации");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <br /><br />
      <img src={logo} alt="" />
      <br /><br />
      <input name="username" placeholder="Username" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <input
          name="password" type={showOld ? 'text' : 'password'}
          required
          placeholder="Пароль" onChange={handleChange}
          style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" />
        <button
          type="button"
          onClick={() => setShowOld(!showOld)}
          style={{ marginLeft: '5px', width: 'max-content' }}
          className='theme-togglee'
        >
          {showOld ? '🙈' : '👁️'}
        </button>
      </div>
      <br />
      <input name="first_name" placeholder="Имя" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <input name="last_name" placeholder="Фамилия" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <input name="phone_number" placeholder="Телефон" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <input name="image" type="file" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200"/>
      <br /><br />
      <button type="submit" class="btn-default" style={{ background: 'green' }}>Зарегистрироваться</button>
      <br></br><br />
    </form>
  );
}
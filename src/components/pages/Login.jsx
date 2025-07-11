import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import logo from '../assents/logo/1.png'

export default function LoginPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [showOld, setShowOld] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("api/accounts/login/", form);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      window.dispatchEvent(new Event("authChanged")); // 👈 добавь это
      navigate("/login");
    } catch (err) {
      if (err.response?.status === 401) {
        alert("Авторизуйтесь снова");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.dispatchEvent(new Event("authChanged"));
        navigate("/login");
      } else {
        alert(err.response?.data?.error || "Ошибка смены пароля");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br /><br />
      <img src={logo} alt="" />
      <br /><br />
      <input name="username" placeholder="Имя пользователя" onChange={handleChange} style={{ border: '1px solid black', width: 'max-content' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto', textAlign: 'center', justifyContent: 'center', marginTop: '15px' }}>
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
      <br /><br />
      <button
        type="submit" class="btn-default" style={{ background: 'green' }}
      >Войти</button>
      <br /><br /><br />
      <a href="/change-password" style={{ color: 'var(--text-color)' }}>Забыли пароль</a>
      <br /><br /><br />
    </form>
  );
}
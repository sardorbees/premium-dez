import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import logo from '../assents/logo/1.png'

export default function LoginPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("api/accounts/login/", form);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      window.dispatchEvent(new Event("authChanged")); // 👈 добавь это
      navigate("/login");
    } catch {
      alert("Неверные данные входа");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br /><br />
      <img src={logo} alt="" />
      <br /><br />
      <input name="username" placeholder="Имя пользователя" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <input name="password" type="password" placeholder="Пароль" onChange={handleChange} style={{ border: '1px solid black' }} class="w-full px-4 py-2 rounded border bg-white text-black border-gray-300 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 transition-colors duration-200" required />
      <br /><br />
      <button type="submit" class="btn-default" style={{ background: 'green' }}>Войти</button>
      <br /><br /><br />
    </form>
  );
}
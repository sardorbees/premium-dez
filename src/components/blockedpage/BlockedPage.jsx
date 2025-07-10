import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const BlockedPage = () => {
  const [status, setStatus] = useState(null);
  const siteKey = "6LckrXsrAAAAAOfCaOA8tMbotpUuxB16dxBww7si"; // 👉 вставь сюда ключ с Google reCAPTCHA сайта

  const handleRecaptcha = async (token) => {
    console.log("Токен от reCAPTCHA:", token); // 👈 проверка в консоли

    try {
      const res = await axios.post('/api/recaptcha-verify/', { token });
      if (res.data.status === "ok") {
        setStatus("✅ Вы успешно прошли проверку. Обновите страницу.");
      } else {
        setStatus("❌ Проверка не пройдена.");
      }
    } catch (error) {
      setStatus("❌ Ошибка отправки запроса на сервер.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2em" }}>
      <h1 style={{ color: "red" }}>🚫 Обнаружен автоклик</h1>
      <p>Подтвердите, что вы не бот:</p>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleRecaptcha} // 👉 сюда приходит token
      />
      {status && <p>{status}</p>}
    </div>
  );
};

export default BlockedPage;
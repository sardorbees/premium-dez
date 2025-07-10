// components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng); // сохраняем выбранный язык
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => changeLanguage('ru')}>🇷🇺 Русский</button>
      <button onClick={() => changeLanguage('uz')}>🇺🇿 O‘zbekcha</button>
    </div>
  );
};

export default LanguageSwitcher;

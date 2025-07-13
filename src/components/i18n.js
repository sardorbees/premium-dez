import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      resetPassword: 'Сброс пароля',
      phonePlaceholder: 'Введите номер (например, 998901234567)',
      sendCode: 'Отправить код',
      resendCode: 'Отправить код заново',
      codePlaceholder: 'Введите код из SMS',
      verifyCode: 'Подтвердить код',
      newPassword: 'Новый пароль',
      changePassword: 'Сменить пароль',
      weakPassword: 'Слишком простой пароль',
      error: 'Ошибка',
      success: 'Пароль успешно изменён!',
    },
  },
  uz: {
    translation: {
      resetPassword: 'Parolni tiklash',
      phonePlaceholder: 'Raqamingizni kiriting (998901234567)',
      sendCode: 'Kod yuborish',
      resendCode: 'Qayta kod yuborish',
      codePlaceholder: 'SMS dan kodni kiriting',
      verifyCode: 'Kod tasdiqlash',
      newPassword: 'Yangi parol',
      changePassword: 'Parolni almashtirish',
      weakPassword: 'Parol juda oddiy',
      error: 'Xatolik',
      success: 'Parol muvaffaqiyatli o‘zgartirildi!',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

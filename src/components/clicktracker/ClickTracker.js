import { useEffect } from 'react';
import axios from 'axios';

let clickCount = 0;
let lastClickTime = Date.now();

const ClickTracker = () => {
  useEffect(() => {
    const handleClick = () => {
      clickCount++;
      const now = Date.now();

      // Сброс, если больше 5 сек с последнего клика
      if (now - lastClickTime > 5000) {
        clickCount = 1;
      }

      lastClickTime = now;

      // Отправка клика
      axios.post('https://backend-dedd.onrender.com/api/user_send/api/track-click/').then(res => {
        console.log(res.data.detail);
      }).catch(err => {
        if (err.response?.status === 403) {
          alert('🚨 Вы заблокированы за подозрительные действия.');
          document.body.innerHTML = '<h1>Вы заблокированы.</h1>';
        }
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ClickTracker;
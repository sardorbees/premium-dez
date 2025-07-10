// ClickTracker.js
import { useEffect } from 'react';
import axios from 'axios';

let clickCount = 0;
let timeout;

const ClickTracker = () => {
  useEffect(() => {
    const handleClick = () => {
      clickCount++;

      // 10 кликов за 5 секунд — подозрение на бота
      if (clickCount > 10) {
        document.body.innerHTML = `
          <div style="text-align:center; padding:50px;">
            <h1 style="color:red;">🚫 Обнаружен автоклик</h1>
            <p>Вы временно заблокированы</p>
          </div>
        `;
        return;
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        clickCount = 0;
      }, 5000);

      axios.post('http://127.0.0.1:8000/api/clickapp/api/track-click/')
        .then(res => {
          if (res.data.blocked) {
            document.body.innerHTML = `
              <div style="text-align:center; padding:50px;">
                <h1 style="color:red;">🚫 Доступ заблокирован</h1>
                <p>Вы подозреваетесь в использовании автоклика</p>
              </div>
            `;
          }
        }).catch(err => {
          console.error("Ошибка отправки клика:", err);
        });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ClickTracker;
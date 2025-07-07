let clickCount = 0;
let blocked = false;

document.addEventListener('click', () => {
  if (blocked) return;

  clickCount++;
  if (clickCount > 20) {
    alert('У вас атака на сайт! AutoClick нажимает');
    blocked = true;

    fetch('https://backend-dedd.onrender.com/api/clickapp/api/monitor-clicks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clicks: clickCount })
    })
      .then(res => res.json())
      .then(data => {
        if (data.blocked) {
          localStorage.setItem('blocked', 'true');
          window.location.reload();
        }
      });
  }
});

// Блокировка отрисовки на уровне HTML (если JS загружен до React)
if (localStorage.getItem('blocked') === 'true') {
  document.body.innerHTML = "<h1 style='color:red;text-align:center'>⛔ Доступ заблокирован: подозрение на AutoClick</h1>";
}

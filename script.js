const section = document.querySelector('section');
const themes = ['light', 'dark', 'blue', 'green'];

function changeTheme(selected) {
  // Remove all theme classes
  themes.forEach(t => section.classList.remove(t));
  // Add selected theme class
  section.classList.add(selected);
  // Save to localStorage
  localStorage.setItem('selectedTheme', selected);
}

// Load saved theme on page load
window.onload = () => {
  const saved = localStorage.getItem('selectedTheme') || 'light';
  document.getElementById('theme').value = saved;
  changeTheme(saved);
};

setInterval(() => {
  let date = new Date(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds();

  let d = hour < 12 ? 'AM' : 'PM';
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour === 0 ? 12 : hour;

  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  document.querySelector('.hour_num').innerText = hour;
  document.querySelector('.min_num').innerText = min;
  document.querySelector('.sec_num').innerText = sec;
  document.querySelector('.am_pm').innerText = d;
}, 1000);

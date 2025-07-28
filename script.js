const newmonth = document.getElementById("monthname");
const day = document.getElementById("day");
const todaydate = document.getElementById("date");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
newmonth.innerHTML = date.toLocaleString('default', { month: 'long' });
day.innerHTML = date.toLocaleString('default', { weekday: 'long' });

todaydate.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();
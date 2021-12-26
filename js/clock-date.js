const clock = document.getElementById("clock");
const date = document.getElementById("date");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");

function clockDate() {
  const now = new Date();
  const years = now.getFullYear();
  const months = now.getMonth();
  const dates = String(now.getDate()).padStart(2, "0");
  const days = now.getDay();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  sec.innerText = seconds;
  ampm.innerText = +hours < 12 ? "AM" : "PM";
  const monthArray = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysString = dayArray[days];
  const monthsString = monthArray[months];
  date.innerText = `${daysString}. ${monthsString} ${dates}. ${years}`;
}

clockDate();
setInterval(clockDate, 1000);

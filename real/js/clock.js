const clock_hour = document.querySelector("#clock-hour");
const clock_min = document.querySelector("#clock-min");
const clock_sec = document.querySelector("#clock-sec");

function getClock() {
  const curDate = new Date();
  const hour = curDate.getHours().toString().padStart(2, "0");
  const min = curDate.getMinutes().toString().padStart(2, "0");
  const sec = curDate.getSeconds().toString().padStart(2, "0");
  clock_hour.innerText = `${hour}`;
  clock_min.innerText = `${min}`;
  clock_sec.innerText = `${sec}`;
}

getClock();
setInterval(getClock, 1000);

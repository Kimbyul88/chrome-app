const clock = document.querySelector("#clock");

function getClock() {
  const curDate = new Date();
  const hour = curDate.getHours().toString().padStart(2, "0");
  const min = curDate.getMinutes().toString().padStart(2, "0");
  const sec = curDate.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);

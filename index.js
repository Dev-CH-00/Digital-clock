const clock = document.querySelector("#clock");

const changeTime = () => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
};

setInterval(changeTime, 1000);

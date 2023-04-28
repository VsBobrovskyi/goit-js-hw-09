function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timeId = null;

btnStart.addEventListener('click', changeColorStart);
btnStop.addEventListener('click', changeColorStop);

btnStop.disabled = true;

function changeColorStart() {
  document.body.style.backgroundColor = getRandomHexColor();
  btnStart.disabled = true;
  btnStop.disabled = false;
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function changeColorStop() {
  clearInterval(timeId);
  btnStart.disabled = false;
  btnStop.disabled = true;
};

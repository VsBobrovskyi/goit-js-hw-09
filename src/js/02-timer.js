import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  btnEl: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnEl.disabled = true;
let selectedDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
selectedDate = selectedDates[0].getTime();

if(selectedDates[0].getTime() < this.config.defaultDate) {
  Notiflix.Notify.failure("Please choose a date in the future")
} else {
  refs.btnEl.disabled = false;
}
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.inputEl, options);
refs.btnEl.addEventListener('click', startTimer);

const timer = {
  intervalId: null,
  start() {
    refs.btnEl.disabled = true;
    refs.inputEl.disabled = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;
      if(deltaTime > 0) {
        const time = convertMs(deltaTime);
      updateTimer(time);
        
      } else {
        clearInterval(this.intervalId);
      }
      
    }, 1000);
  }
};



function startTimer() {
  if(refs.btnEl.disabled = false){
    return;
  }
  timer.start();
};

function updateTimer({days, hours, minutes, seconds}) {
  refs.days.textContent = addLeadingZero(`${days}`);
  refs.hours.textContent = addLeadingZero(`${hours}`);
  refs.minutes.textContent = addLeadingZero(`${minutes}`);
  refs.seconds.textContent = addLeadingZero(`${seconds}`);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
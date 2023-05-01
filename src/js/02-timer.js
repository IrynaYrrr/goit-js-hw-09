import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');

let milliseconds = 0;

buttonStart.setAttribute('disabled', '');

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] < new Date()){
      Notiflix.Notify.failure('Please choose a date in the future',
      {
        width: '500px',
        position: 'center-top',
        distance: '10px',
      });
    } else {
      buttonStart.removeAttribute('disabled', '');
      const start = new Date(selectedDates[0]);
      milliseconds = start - new Date();
    }
  },
});

buttonStart.addEventListener('click', onStart);

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


function addLeadingZero(value) {
  return value.toString().padStart(2, ['0']);
}

 function onStart(){
  buttonStart.setAttribute('disabled', '');

  timerId = setInterval(() => {
   const { days, hours, minutes, seconds } = convertMs(milliseconds);
   dataDays.textContent = addLeadingZero(days);
   dataHours.textContent = addLeadingZero(hours);
   dataMinutes.textContent = addLeadingZero(minutes);
   dataSeconds.textContent = addLeadingZero(seconds);
   milliseconds -= 1000;
  }, 1000);
}

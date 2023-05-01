import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


// console.log(dataDays);
buttonStart.setAttribute('disabled', '');

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.dir(selectedDates[0]);
    if(selectedDates[0] < new Date()){
      window.alert("Please choose a date in the future");
    } else {
      buttonStart.removeAttribute('disabled', '');
    }
  },
})

buttonStart.addEventListener('click', onStart);

 function onStart(){

 }

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

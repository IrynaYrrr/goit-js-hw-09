import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');

button.setAttribute('disabled', '');

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
})

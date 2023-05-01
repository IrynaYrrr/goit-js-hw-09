const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;


buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener("click", onStop);
buttonStop.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStart(){
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  buttonStart.setAttribute('disabled', '');
  buttonStop.removeAttribute('disabled', '');
}


function onStop(){
  clearInterval(timerId);

  buttonStart.removeAttribute('disabled', '');
  buttonStop.setAttribute('disabled', '');
}

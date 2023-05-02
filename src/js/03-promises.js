import Notiflix from 'notiflix';
const formSubmit = document.querySelector('form');
const button = document.querySelector('button');

formSubmit.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function handleSubmit(evt) {
  evt.preventDefault();

  const delay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        if (i === amount - 1) {
          button.removeAttribute('disabled', '');
        }
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        if (i === amount - 1) {
          button.removeAttribute('disabled', '');
        }
      });
  };
  button.setAttribute('disabled', '');
};

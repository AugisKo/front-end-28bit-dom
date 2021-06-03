let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const h1 = h1DOM.innerText;

minusDOM.addEventListener('click', () => {
  /* rezultatas= rezultatas - 1; arba rezultatas -= 1; arba --rezultatas */
  numberDOM.innerText = --rezultatas;
  h1DOM.innerText = 'Žaidimas progrese';
});

plusDOM.addEventListener('click', () => {
  /* rezultatas= rezultatas + 1; arba rezultatas += 1; arba ++rezultatas */
  numberDOM.innerText = ++rezultatas;
  h1DOM.innerText = 'Žaidimas progrese';
});

resetDOM.addEventListener('click', () => {
  rezultatas = 0;
  numberDOM.innerText = rezultatas;
  h1DOM.innerText = h1;
});

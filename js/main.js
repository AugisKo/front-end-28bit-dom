const buttonDOM = document.querySelector('button');
const inputMessageDOM = document.querySelector('#message');
const spanDOM = document.querySelector('span');
const inputBgColorDOM = document.querySelector('#bg-color');
const inputTxtColorDOM = document.querySelector('#text-color');

inputMessageDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
  event.preventDefault();
  bgColor = inputBgColorDOM.value;
  (TxtColor = inputTxtColorDOM), value;
  spanDOM.innerText = inputMessageDOM.value;
  spanDOM.style.color = TxtColor;
  spanDOM.style.backgroundColor = bgColor;
  inputMessageDOM.value = '';
  inputBgColorDOM.value = '';
  inputTxtColorDOM.value = '';
});

const buttonDOM = document.querySelector('button');
const inputMessageDOM = document.querySelector('#message');
const spanDOM = document.querySelector('span');
const inputBgColorDOM = document.querySelector('#bg-color');
const inputTxtColorDOM = document.querySelector('#text-color');

inputMessageDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
  event.preventDefault();
  spanDOM.style.color = inputTxtColorDOM.value;
  spanDOM.style.backgroundColor = inputBgColorDOM.value;
  spanDOM.innerText = inputMessageDOM.value;
  inputMessageDOM.value = '';
});

let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');
const h1 = h1DOM.innerText;
const h1a = 'Žaidimas progrese';
const ul = ulDOM.innerHTML;
const ulMin = `<li>Paspaudei minusa ir dabartinis rezultatas yra ${rezultatas}.</li>`;
const ulPlius = `<li>Paspaudei pliusa ir dabartinis rezultatas yra ${rezultatas}.</li>`;

ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`;

minusDOM.addEventListener('click', () => {
  /* rezultatas= rezultatas - 1; arba rezultatas -= 1; arba --rezultatas */
  numberDOM.innerText = --rezultatas;
  h1DOM.innerText = h1a;
  ulDOM.innerHTML += ulMin;
});

plusDOM.addEventListener('click', () => {
  /* rezultatas= rezultatas + 1; arba rezultatas += 1; arba ++rezultatas */
  numberDOM.innerText = ++rezultatas;
  h1DOM.innerText = h1a;
  ulDOM.innerHTML += ulPlius;
});

resetDOM.addEventListener('click', () => {
  rezultatas = 0;
  numberDOM.innerText = rezultatas;
  h1DOM.innerText = h1;
  ulDOM.innerHTML = ul;
});

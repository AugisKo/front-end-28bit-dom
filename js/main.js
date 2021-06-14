const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
const boardDOM = document.querySelector('.board');

buttonDOM.addEventListener('click', (e) => {
  e.preventDefault();
  const n = parseInt(inputDOM.value);
  optionDOM.textContent = `${n}x${n}`;
  renderBoard(boardDOM, n);
});

function renderBoard(DOMelement, size) {
  const elementSize = 100 / size;
  // const cellHTML = `<div class="cell" style="width: ${elementSize}%;"></div>`.repeat(size);
  // const rowHTML = `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
  // DOMelement.innerHTML = rowHTML.repeat(size);

  let wbCellHTML = '';
  let bbCellHTML = '';
  let HTML = '';
  let bc = 'white';
  let bcb = 'black';
  for (let c = 0; c < size; c++) {
    wbCellHTML += `<div class="cell" style="width: ${elementSize}%; background-color: ${bc};"></div>`;
    if (bc === 'white') {bc = 'black'} else { bc = 'white'};
  }
  for (let c = 0; c < size; c++) {
    bbCellHTML += `<div class="cell" style="width: ${elementSize}%; background-color: ${bcb};"></div>`;
    if (bcb === 'black') {bcb = 'white'} else { bcb = 'black'};
  }
  let cellHTML = wbCellHTML;
  for (let r = 0; r < size; r++) {   
    HTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    if (cellHTML === wbCellHTML) {cellHTML = bbCellHTML} else {cellHTML = wbCellHTML}
  }

  DOMelement.innerHTML = HTML;
}

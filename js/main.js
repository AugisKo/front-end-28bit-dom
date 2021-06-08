function generuotiLenta(selector, count) {
  const lentaDOM = document.querySelector(selector);

  if (!lentaDOM) {
    console.error('ERROR: nerastas elementas');
    return false;
  }
  if (count < 0 || count % 1 !== 0) {
    console.error('ERROR: skaicius turi buti teigiamas ir sveikasis');
    return false;
  }
  let HTML = '';
  for (let i = 1; i <= count; i++) {
    HTML += `<div>${i}</div>`;
  }
  lentaDOM.innerHTML = HTML;
  console.log(lentaDOM);
}

generuotiLenta('div', 8);

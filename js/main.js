function generuotiSocials(selector, array) {
  if (selector === '' || typeof selector !== 'string') {
    console.error('ERROR: Selectorius turi buti tekstas ir ne tuscias');
    return false;
  }

  if (!Array.isArray(array) || array.length === 0) {
    console.error('ERROR: Sarasas negali buti tuscias');
    return false;
  }

  const selectorDOM = document.querySelector(selector);
  console.log(selectorDOM);

  let HTML = '';
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] !== '' && typeof array[i] === 'string') {
      HTML += `<i class ="fa fa-${array[i]}"></i>`;
    }
  }
  selectorDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 5, , 'linkedin'];

generuotiSocials('.socials', icons);

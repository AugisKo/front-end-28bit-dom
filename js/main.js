function generuotiSocials(selector, array) {
  const selectorDOM = document.querySelector(selector);
  console.log(selectorDOM);

  if (selector === '' || typeof selector !== 'string') {
    console.error('ERROR: Selectorius turi buti tekstas ir ne tuscias');
    return false;
  }

  if (!Array.isArray(array) || array.length === 0) {
    console.error('ERROR: Sarasas negali buti tuscias');
    return false;
  }

  let HTML = '';
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    HTML += `<i class ="fa fa-${array[i]}"></i>`;
  }
  selectorDOM.innerHTML = HTML;
}

const icons = ['facebook', 'twitter', 'linkedin'];

generuotiSocials('.socials', icons);

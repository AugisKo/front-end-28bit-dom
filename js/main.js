const buttonDOM = document.querySelector('button');
const customerDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const patiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
const orderDOM = document.querySelector('.order');

buttonDOM.addEventListener('click', (event) => {
  event.preventDefault();

  function menuChecked(item) {
    if (item.checked) {
      return 'nori';
    }
    return 'nenori';
  }

  function gerimasChecked(item) {
    for (let i = 0; i < 3; i++)
      if (item[i].checked) {
        return item[i].value;
      }
    return 'nepasirinko';
  }

  orderDOM.innerText = `Uzsakovas vardu ${customerDOM.value}, ${menuChecked(
    sriubaDOM
  )} sriubos, ${menuChecked(
    patiekalasDOM
  )} pagrindinio patiekalo, ${menuChecked(
    desertasDOM
  )} deserto ir ${gerimasChecked(gerimaiDOM)} yra pasirinktas gerymas.`;
});

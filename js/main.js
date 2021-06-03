const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');

console.log(logoDOM);
console.log(hamburgerDOM);
console.log(navDOM);

hamburgerDOM.addEventListener('click', () => {
  logoDOM.classList.toggle('big');
  navDOM.classList.toggle('visible');
});

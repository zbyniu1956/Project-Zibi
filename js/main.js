const header = document.querySelector('header');
const h1 = document.querySelector('h1');
let image = true;
let title = true;
const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = image ? 'url(/img/ballon.jpg.png)' : 'url(/img/bee.jpg)';
  h1.textContent = title ? "Balony na tony" : 'bee';
}

header.addEventListener('click', changeImage)
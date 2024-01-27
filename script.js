const bar  = document.getElementById('bar');
const nav  = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
      nav.classList.toggle('active');  
    })
}

function redirectToLink() {
  var link = 'https://linktr.ee/ossianskincareofficial';
  window.open(link, '_blank');
}
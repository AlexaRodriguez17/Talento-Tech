
const gallery = document.querySelector('.gallery');
const navArrows = document.querySelectorAll('.nav-arrows button');
const images = document.querySelectorAll('.gallery-image');


let activeImage = 0;


navArrows.forEach((arrow) => {
  arrow.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev')) {
      activeImage--;
    } else {
      activeImage++;
    }
    updateGallery();
  });
});


function updateGallery() {
  images.forEach((image, index) => {
    if (index === activeImage) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

updateGallery();

const formulario = document.getElementById('mi_formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = {};
    const campos = formulario.elements;
    for (let i = 0; i < campos.length; i++) {
      datos[campos[i].name] = campos[i].value;
    }

    console.log(datos);
  });
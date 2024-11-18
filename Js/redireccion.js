let slideIndex = 0;
function moveSlide(step) {
  showSlide(slideIndex += step);
}


function showSlide(index) {
  let slides = document.querySelectorAll(".slide");


  if (index >= slides.length) {
    slideIndex = 0;
  }

  // Si el índice es menor que 0, vamos al último slide
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Ocultamos todas las imágenes
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Mostramos la imagen activa
  slides[slideIndex].style.display = "block";
}

// Inicializamos el carrusel mostrando la primera imagen
showSlide(slideIndex);
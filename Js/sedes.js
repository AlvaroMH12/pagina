let currentIndex = 0;

function moveCarousel(direction) {
  const images = document.querySelectorAll('.carousel-images img');
  const totalImages = images.length;

  // Calcular el nuevo índice
  currentIndex = (currentIndex + direction + totalImages) % totalImages;

  // Mover el carrusel a la imagen correspondiente
  const offset = -currentIndex * 100; // Moverse en función del índice actual
  document.querySelector('.carousel-images').style.transform = translateX(${offset}%);
}
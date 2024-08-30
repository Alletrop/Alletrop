let currentIndex = 0;

function showNextImage() {
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    currentIndex = (currentIndex + 1) % slides.length;
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); // Muda de imagem a cada 3 segundos
